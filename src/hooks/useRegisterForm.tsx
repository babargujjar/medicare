"use client"
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useRegisterForm = () => {
    
      useEffect(() => {
        signOut({
          redirect: false,
        });
      }, []);

      const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        companyName: "",
        industry: "",
        employe: "",
      });
      const handler = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const router = useRouter();

      const register = async () => {
        try {
          if (
            !formData.name ||
            !formData.companyName ||
            !formData.industry ||
            !formData.employe ||
            !formData.email ||
            !formData.password
          ) {
            toast.error("Enter all fields");
            return;
          }

          const email = formData.email;
          const password = formData.password;
          const name = formData.name;
          await axios.post("/api/register", {
            email,
            password,
          });
          const response = await axios.post("/api/submit", formData);
          if (response.status == 200) {
            toast.success("Register Successfully");
          } else {
            toast.success("Error occur please try again");
          }
          router.push("/dashboard");

          setFormData({
            email: "",
            password: "",
            name: "",
            companyName: "",
            industry: "",
            employe: "",
          });

          toast.success("User Register Successfully");
        } catch (error: any) {
          console.error(error);
          toast.error("failed to register");
        }
      };
  return {
handler,register,formData
  }
}

export default useRegisterForm