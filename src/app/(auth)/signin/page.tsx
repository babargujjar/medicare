import LoginForm from '@/components/loginForm/LoginForm'
import React from 'react'
import dashboard from "../../../assets/Patients.svg";
import Image from "next/image";



const page = () => {
  return (
    <div className="max-w-[1440px] flex flex-row bg-white mx-auto h-[1024px]">
      <div className="bg-white max-w-[544px] flex px-[47px] justify-center border-2">
        <div className="pt-[125px]">
          <h1 className="text-[38px] font-normal">Welcome to Medicare</h1>
          <h3 className="text-[22px] font-medium mb-8 text-[#4F4F4F]">
            Tell us about your comapny
          </h3>
          <LoginForm />
        </div>
      </div>
      <div className="border-2 bg-[#0000AC] flex flex-col items-center w-full h-full">
        <h2 className="text-[25px] text-[#FFFFFF] font-bold mt-[137px] mb-[22px]">
          ALL IN ONE DASHBOARD
        </h2>
        <Image
          src={dashboard}
          alt=""
          className="w-[669px] h-[475px] mb-[66px]"
        />
        <h2 className="font-normal text-[25px] mb-[81px] text-[#FFFFFF]">
          Keep track of all patient information in this section.
        </h2>
        <button className="rounded-[5px] py-[17px] bg-[#FFFFFF] px-[15px] text-[#0000AC] text-[12px] font-normal">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default page