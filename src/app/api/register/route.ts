import { NextResponse } from "next/server"
import prismadb from "../../../../libs/prismadb"
import bcrypt from "bcrypt"

export async function POST(req:Request) {
    try {
        const body = await req.json()

        const {email,password} = body

        const userAlreadyExist = await prismadb.user.findFirst({
            where:{
                email:email
            }
        })

        if(userAlreadyExist?.id){
            return new NextResponse("User Already Existed", {status: 500})
        }

        const hashedPassword = await bcrypt.hash(password,12)

        const newUser = await prismadb.user.create({
            data:{
                email :email,
                hashedPassword:hashedPassword
            }
        })

        return NextResponse.json(newUser)
        
    } catch (error:any) {
        console.log("Regter error "+error)
        return new NextResponse(error, {status: 500})
    }
}