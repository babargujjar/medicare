"use client"
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import search from "../../assets/search.png"
import vector from "../../assets/vector.png"
import nitification from "../../assets/notification.png"
import message from "../../assets/message.png"
import { getSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import useNavbar from "@/hooks/useNavbar";


const Navbar = () => {

  const {logout,user,currentDate} = useNavbar()
  return (
    <div className="w-full h-[92px] flex flex-row items-center bg-white border-2 border-[#E0E0E0]">
      <div className="w-[244px] h-[92px] border-r-2 flex justify-center items-center">
        <Image src={logo} alt="" className="w-[202px] h-[62px]" />
      </div>
      <div className="flex flex-row">
        <div className="relative mr-[60px]">
          <input
            placeholder="search"
            className="w-[580px] ml-[26px] pl-[10px] h-[40px] rounded-[5px] border-2"
          />
          <Image
            src={search}
            alt=""
            className="w-[19px] h-[19px] absolute right-7 top-3"
          />
        </div>
        <div className="text-[#000000] text-[16px] mr-[40px] text-right">
          <h2 className="font-normal w-full">{user?.user.name}</h2>
          <h2 className="font-bold">Doctor Industry</h2>
        </div>
        <div className="border-2 border-[#E0E0E0] mr-[40px] rounded-[6px] py-1 px-2 flex justify-center items-center">
          <p className="font-normal text-[16px] ">{currentDate()}</p>
        </div>
        <div className="flex flex-row gap-[33px] justify-center items-center ">
          <Image src={message} alt="" className="w-[25px]" />
          <Image src={nitification} alt="" className="w-[22px]" />
          <Image
            onClick={logout}
            src={vector}
            alt=""
            className="w-[26px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
