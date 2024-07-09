"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HomeSignup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
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

  const submitData = async (e: any) => {
    e.preventDefault();
    // try {
    //   if (
    //     !formData.name ||
    //     !formData.companyName ||
    //     !formData.industry ||
    //     !formData.employe
    //   ) {
    //     toast.error("Enter all fields");
    //     return;
    //   }
    //   const response = await axios.post("/api/submit", formData);
    //   if (response.status == 200) {
    //     toast.success("Register Successfully");
    //     console.log("Form data submitted successfully:", response.data);
    //   } else {
    //     toast.success("Error occur please try again");
    //   }
    //   router.push("/dashboard")

    //    setFormData({
    //      name: "",
    //      companyName: "",
    //      industry: "",
    //      employe: "",
    //    });
    // } catch (error) {
    //   console.error("Error submitting form data:", error);
    // }
  };
  return (
    <div>
      <div className="h-[68px] mb-[22px]">
        <h3 className="text-[16px] text-[#4F4F4F]">Name</h3>
        <input
          name="name"
          value={formData.name}
          onChange={handler}
          className="text-[22px] font-medium border-b-2 w-[452px] outline-none placeholder-black border-[#828282] placeholder-shown:text-black"
          type="text"
          alt=""
          placeholder="Enter Name"
        />
      </div>
      <div className="h-[68px] mb-[22px]">
        <h3 className="text-[16px] text-[#4F4F4F]">Company Name</h3>
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handler}
          className="text-[22px] font-medium border-b-2 placeholder-black border-[#828282] w-[452px] outline-none"
          type="text"
          alt=""
          placeholder="Enter Company Name"
        />
      </div>
      <div className="h-[68px] mb-[22px]">
        <h3 className="text-[16px] text-[#4F4F4F]">Industry</h3>
        <input
          name="industry"
          value={formData.industry}
          onChange={handler}
          className="text-[22px] font-medium border-b-2 border-[#828282] placeholder-black w-[452px] outline-none"
          type="text"
          alt=""
          placeholder="Enter Industry"
        />
      </div>
      <div className="h-[68px] mb-[22px]">
        <h3 className="text-[16px] text-[#4F4F4F]">
          How many employes do you have?
        </h3>
        <input
          name="employe"
          value={formData.employe}
          onChange={handler}
          className="text-[22px] font-medium border-b-2 border-[#828282] placeholder-black w-[452px] outline-none"
          type="text"
          alt=""
          placeholder="Enter employes"
        />
      </div>
      <div className="pt-[22px]">
        <button
          onClick={submitData}
          className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default HomeSignup;
