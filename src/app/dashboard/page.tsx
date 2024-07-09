"use client"
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import plusicon from "@/assets/blueplus.png";
import OfflineChart from "@/components/offlineChart/OfflineChart";
import UpComingSchedule from "@/components/upComingSchedule/UpComingSchedule";
import OnlineChart from "@/components/onlineChart/OnlineChart";
import TotalPatientChart from "@/components/pieChart/pieChart";
import useDashboard from "@/hooks/useDashboard";
import DashboardInput from "@/components/dashboardInput/DashboardInput";

const page = () => {

const {
  offlineConsaltaion,
  onlineConsaltaion,
  totalPatients,
  patients,
  appointmentData,
} = useDashboard();

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div>
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px] pl-[30px]">
            Dashboard {">"} Summary
          </h2>
          <div className="px-[26px]">
            <div className="flex gap-5">
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">
                    Offline Consultations
                  </h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">
                    {offlineConsaltaion}
                  </h2>
                  <OfflineChart appointmentData={appointmentData} />
                </div>
              </div>
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">
                    Online Consultations
                  </h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">{onlineConsaltaion}</h2>
                  <OnlineChart appointmentData={appointmentData} />
                </div>
              </div>
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">Total patients</h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">{totalPatients}</h2>
                  <TotalPatientChart patients={patients} />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-[21px] w-[709px] h-[611px] bg-[#FFFFFF] mt-5 rounded-md">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-[15px]">Tasks</h2>
                  <div className="flex gap-2 justify-center">
                    <button className="font-semibold text-[12px] text-[#0000AC]">
                      New Task
                    </button>
                    <div className="border-[#0000AC] w-[23px] flex justify-center items-center h-[23px] border ">
                      <Image
                        className="w-[10px] h-[10px]"
                        src={plusicon}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <DashboardInput />
                  <DashboardInput />
                  <DashboardInput />
                </div>
              </div>
              <UpComingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
