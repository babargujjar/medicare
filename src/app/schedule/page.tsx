"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import icon from "../../assets/schedule.png";
import search from "../../assets/search1.png";
import add from "../../assets/add.png";
import mark from "../../assets/questionmark.png";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CalendarChart from "@/components/calendar/CalendarChart";
import AppointmentModal from "@/components/addAppointmentsModal/AppointmentModal";

const page = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div>
          <div>
            <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px] pl-[30px]">
              Patient Register
            </h2>
            <div className="mx-[30px] w-[1117px]">
              <div className="bg-white w-full mb-[34px] flex justify-between items-center px-[30px] py-[11px]">
                <h2 className="font-medium text-[22px] text-[#1D1D1D]">
                  Weekly schedule from 25th to 1st November 2022
                </h2>
                <div className="flex flex-row gap-5">
                  <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                    <Image
                      className="w-[18px] cursor-pointer h-[18px]"
                      onClick={() => setModal(true)}
                      src={add}
                      alt=""
                    />
                  </div>
                  <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                    <Image className="w-[28px] h-[28px]" src={search} alt="" />
                  </div>
                  <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                    <Image className="w-[28px] h-[28px]" src={icon} alt="" />
                  </div>
                  <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                    <Image className="w-[30px] h-[30px]" src={mark} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <CalendarChart />
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        {modal && <AppointmentModal setModal={setModal} />}
      </div>
    </div>
  );
};

export default page;
