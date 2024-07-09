import dashboard from "../../../assets/Patients.svg";
import Image from "next/image";
import React from "react";
import RegisterForm from "@/components/register/RegisterForm";

const page = () => {
  return (
    <div className="max-w-[1440px] flex flex-row bg-white mx-auto h-[1024px]">
      <div className="bg-white max-w-[544px] flex px-[47px] justify-center border-2">
        <div className="pt-[125px]">
          <h1 className="text-[38px] font-normal">Welcome to Medicare</h1>
          <h3 className="text-[22px] font-medium mb-8 text-[#4F4F4F]">
            Tell us about your comapny
          </h3>
          <RegisterForm />
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
  // return (
  //   <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
  //     <div className="p-10 bg-white rounded-lg w-full sm:w-3/4 lg:w-auto shadow-lg">
  //       <h1 className="font-semibold text-4xl text-center text-neutral-900">
  //         Register
  //       </h1>
  //       <hr className="my-5" />
  //       <RegisterForm />
  //       <div className="text-center text-sm mt-5 text-neutral-500">
  //          Have an account?
  //         <Link href={"/signin"} className="font-bold text-neutral-900">
  //           Login
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default page;
