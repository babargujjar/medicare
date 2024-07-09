"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dashboardSelected from "../../assets/dashboard.png";
import shaduleSelected from "../../assets/calenderblue.png";
import dashboard from "../../assets/dashoardwhite.png";
import slide from "../../assets/Rectangle 4.png";
import shadule from "../../assets/calender.png";
import task from "../../assets/task.png";
import patient from "../../assets/patients.png";
import patientBlue from "../../assets/patientsblue.png";
import message from "../../assets/message.png";
import analytics from "../../assets/analytics.png";
import setting from "../../assets/setting.png";
import settingBlue from "@/assets/settingblue.png"
import support from "../../assets/support.png";
import Link from "next/link";
import useSideBar from "@/hooks/useSideBar";

const Sidebar = () => {
  
const {handleItemClick,selectedItem} = useSideBar()


  return (
    <div className="w-[245px] h-[900px] border-2 pt-[30px] border-[#E0E0E0] bg-white">
      <div>
        <h2 className="text-[13px] font-normal ml-[20px] text-[#828282]">
          MENU
        </h2>
        <div>
          <li
            onClick={() => handleItemClick("Dashboard")}
            className={`h-[44px] py-2 flex flex-row items-center cursor-pointer  ${
              selectedItem === "Dashboard" && "text-[#0000AC]"
            }`}
          >
            <Image
              className={`h-[23px] w-[5px] mr-[15px] opacity-0 ${
                selectedItem === "Dashboard" && "opacity-100"
              }`}
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px]`}
              src={selectedItem === "Dashboard" ? dashboardSelected : dashboard}
              alt=""
            />
            <Link href={"/dashboard"}>
              <span className={`font-normal text-[15px]`}>Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => handleItemClick("Schedule")}
            className={`h-[44px] py-2 flex flex-row items-center cursor-pointer ${
              selectedItem === "Schedule" && "text-[#0000AC]"
            }`}
          >
            <Image
              className={`h-[23px] w-[5px] mr-[15px] opacity-0 ${
                selectedItem === "Schedule" && "opacity-100"
              }`}
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={selectedItem === "Schedule" ? shaduleSelected : shadule}
              alt=""
            />
            <Link href={"/schedule"}>
              <span className={`font-normal text-[15px]`}>Schedule</span>
            </Link>
          </li>
          <li className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className="h-[23px] w-[5px] mr-[15px] opacity-0"
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px]`}
              src={task}
              alt=""
            />
            <h2 className={`font-normal text-[15px] `}>Tasks</h2>
          </li>
          <li
            onClick={() => handleItemClick("Patients")}
            className={`h-[44px] py-2 flex flex-row items-center cursor-pointer ${
              selectedItem === "Patients" && "text-[#0000AC]"
            }`}
          >
            <Image
              className={`h-[23px] w-[5px] mr-[15px] opacity-0 ${
                selectedItem === "Patients" && "opacity-100"
              }`}
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={selectedItem === "Patients" ? patientBlue : patient}
              alt=""
            />
            <Link href={"/patients"}>
              <h2 className={`font-normal text-[15px]`}>Patients</h2>
            </Link>
          </li>
          <li className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[5px] mr-[15px] opacity-0`}
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={message}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Messages</h2>
          </li>
          <li className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className="h-[23px] w-[5px] mr-[15px] opacity-0"
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={analytics}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Analytics</h2>
          </li>
          <hr className="w-[168px] mx-auto mt-[24px] mb-[35px]" />
          <h2 className="text-[13px] font-normal ml-[20px] text-[#828282]">
            GENERAL
          </h2>
          <li
            onClick={() => handleItemClick("Setting")}
            className={`h-[44px] py-2 flex flex-row items-center cursor-pointer ${
              selectedItem === "Setting" && "text-[#0000AC]"
            }`}
          >
            <Image
              className={`h-[23px] w-[5px] mr-[15px] opacity-0 ${
                selectedItem === "Setting" && "opacity-100"
              }`}
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={selectedItem === "Setting" ? settingBlue : setting}
              alt=""
            />
            <Link href={"/settings"}>
              <h2 className={`font-normal text-[15px]`}>Settings</h2>
            </Link>
          </li>
          <li className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className="h-[23px] w-[5px] mr-[15px] opacity-0"
              src={slide}
              alt=""
            />
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={support}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Support</h2>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;