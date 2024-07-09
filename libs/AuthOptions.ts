import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../libs/prismadb"
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google"


export const authOptions : AuthOptions = {
    pages:{signIn:"/signin"},
    providers :[
         GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  }),
        Credentials({
            name:"credentials",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Missing Credentials")
                }
                

                const user = await prismadb.user.findFirst({
                    where:{
                        email:credentials.email,
                    }
                })

                if(!user || !user.id || !user.hashedPassword){
                    throw new Error("Invalid Credentials")
                }

                 if (!user || !user.id || !user.hashedPassword) {
                   return null; 
                 }

                // const currentHashedPassword = await bcrypt.hash(credentials.password,12)

                const comparepassword = await bcrypt.compare(credentials.password,user.hashedPassword)
                
                if (comparepassword) {
                  return user;
                } else {
                  return null; // Return null instead of undefined
                }
                // if(currentHashedPassword !== user.hashedPassword){
                //      throw new Error("Invalid Credential")
                // }
                
            },
        })
     ],
     callbacks: {
    async signIn({ account, profile }: any) {
      if (account?.provider === "google") {
        // if (profile?.email) {
        //   return false; // Prompt user to choose account
        // }
        const existingUser = await prismadb.user.findUnique({
          where: { email: profile?.email },
        });
        if (existingUser) {
          console.log("User already exists:", existingUser);
        } else {
          try {
            const newUser = await prismadb.user.create({
              data: {
                email: profile?.email,
                hashedPassword: "", 
                name: profile?.name,
                username:profile?.email
              },
            });
            console.log("User created:", newUser);
          } catch (error) {
            console.log("Error creating user:", error);
          }
        }
      }
      return true;
    },
  },
     secret : process.env.NEXTAUTH_SECRET,
     session:{
        strategy:'jwt'
     },
     debug: process.env.NODE_ENV !== "production"
}

