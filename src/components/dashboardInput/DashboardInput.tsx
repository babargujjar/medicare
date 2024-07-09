import React from 'react'
import threeDots from "@/assets/more-horizontal.png";
import Image from "next/image";

const DashboardInput = () => {
  return (
    <div className="flex rounded-md justify-between bg-[#FBFBFB] px-[25px] py-[18px] w-full mt-[15px]">
      <div className="flex">
        <input
          className="w-[31px] rounded-lg cursor-pointer h-[31px]"
          type="checkbox"
        />
        <div className=" ml-[15px]">
          <p className="font-medium text-[15px] mb-2">
            Task Completed successfully
          </p>
          <p className="font-normal text-[12px]">
            Send prescription files to Night duty nurse
          </p>
        </div>
      </div>
      <div className="flex ">
        <p className="mr-[51px] font-normal text-[12px] mt-5">22 oct 2022</p>
        <Image
          className="w-[28px] border rounded-lg p-1 cursor-pointer h-[28px]"
          src={threeDots}
          alt=""
        />
      </div>
    </div>
  );
}

export default DashboardInput