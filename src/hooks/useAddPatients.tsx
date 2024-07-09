"use client"
import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

const useAddPatients = () => {

      const [formData, setFormData] = useState({
        foreName: "",
        sureName: "",
        dateBirth: "",
        gender: "",
        diasease: "",
        note: "",
        phone: "",
        status: "On Treatment",
      });

      const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleGenderChange = (gender: string) => {
        setFormData((prevState) => ({
          ...prevState,
          gender: gender,
        }));
      };

      const submitData = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (
          formData.foreName &&
          formData.sureName &&
          formData.dateBirth &&
          formData.gender &&
          formData.diasease &&
          formData.note &&
          formData.phone &&
          formData.status
        ) {
          const response = await axios.post("/api/addPatients", formData);
          toast.success("Patient added successfully!");
        } else {
          alert("All fields are required!");
        }
      };

  return {
    handleGenderChange,
    handleChange,
    submitData,
    formData
  };
  
}

export default useAddPatients