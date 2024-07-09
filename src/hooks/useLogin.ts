"use client"
import { signIn, signOut } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useLogin = () => {

     const [email, setEmail] = useState("demo@gmail.com");
     const [password, setPassword] = useState("123456789");

     const login = async () => {
       try {
         if (!email || !password) {
           toast.error("Enter all fields");
           return;
         }
         const loginResult = await signIn("credentials", {
           email,
           password,
           redirect: false,
         });
        //  console.log("loginResult", loginResult);
         if (loginResult?.ok) {
           toast.success("User Login Successfully");
           window.location.assign("/dashboard");
         } else if (loginResult?.status === 401) {
           toast.error("Invalid Email or Password");
         }
       } catch (error: any) {
         console.error(error);
         toast.error("Failed to login");
       }
     };
  return {
    setEmail,
    email,
    setPassword,
    password,
    login
  }
}

export default useLogin