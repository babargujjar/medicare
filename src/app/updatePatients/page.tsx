// "use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import date from "../../assets/calendar.png";
import Link from "next/link";
import useUpdatePatient from "@/hooks/useUpdatePatient";


const Page = () => {

  const {
    handleChange,
    handleGenderChange,
    handleStatusChange,
    submitData,
    formData,
    statusOptions,
    dropdownOpen,
    toggleDropdown
  } = useUpdatePatient();

  
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div className="px-[30px] ">
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px]">
            Patient Register {">"} Update patients
          </h2>
          <div className="border bg-white mb-[43px] flex justify-between w-[1139px] pl-[29px] pr-[62px] h-[74px] items-center">
            <h2 className="font-medium text-[22px]">Update Patients</h2>
            <div className="flex gap-[15px]">
              <Link href={"/patients"}>
                <button className="border-[#0000AC] border-2  text-[#0000AC] text-[16px] font-medium w-[77px] h-[41px] flex justify-center items-center">
                  Cancel
                </button>
              </Link>
              <button
                onClick={submitData}
                className="bg-[#0000AC] text-[#FFFFFF] text-[16px] font-medium w-[77px] h-[41px] flex justify-center items-center"
              >
                Update
              </button>
            </div>
          </div>
          <div className="w-[783px] h-[835px] pl-[41px] pt-[58px] bg-white mx-auto">
            <div className="grid grid-cols-4 mb-[24px]">
              <h2 className="col-span-1">Record Name</h2>
              <div className="col-span-3">
                <h2>
                  Record number will be assigned automatically when you save.
                </h2>
                <button className="border py-2 px-4 font-bold text-[18px] text-[#333333]">
                  assign manually
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Forename</h2>
              <input
                className="col-span-3 border w-[415px] h-[44px] border-[#E0E0E0]"
                type="text"
                name="foreName"
                value={formData.foreName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Surename</h2>
              <input
                className="col-span-3 border w-[415px] h-[44px] border-[#E0E0E0]"
                type="text"
                name="sureName"
                value={formData.sureName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Date of Birth</h2>
              <div className=" w-[415px] h-[44px] flex gap-[14px]">
                <div className="w-[45px] h-[45px] border border-[#E0E0E0] flex justify-center items-center">
                  <Image className="w-[24px] h-[24px]" src={date} alt="" />
                </div>
                <input
                  className="col-span-3 border w-full border-[#E0E0E0]"
                  type="date"
                  name="dateBirth"
                  placeholder="MM/DD/YYYY"
                  value={formData.dateBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Sex</h2>
              <div className="flex gap-[15px] col-span-3">
                <button
                  className={`text-[#333333] font-normal text-[16px] focus:bg-blue-600 focus:text-white w-[72px] h-[44px] flex justify-center items-center`}
                  onClick={() => handleGenderChange("Male")}
                >
                  Male
                </button>
                <button
                  className={`text-[#333333] font-normal text-[16px] focus:bg-blue-600 focus:text-white w-[83px] h-[44px] flex justify-center items-center`}
                  onClick={() => handleGenderChange("Female")}
                >
                  Female
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Diagnosis</h2>
              <input
                className="col-span-3 border w-[415px] h-[44px] border-[#E0E0E0]"
                type="text"
                name="diasease"
                value={formData.diasease}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Note</h2>
              <textarea
                className="col-span-3 border w-[415px] h-[100px] border-[#E0E0E0]"
                name="note"
                value={formData.note}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Phone</h2>
              <input
                className="col-span-3 border w-[415px] h-[44px] border-[#E0E0E0]"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid relative grid-cols-4 mb-[31px]">
              <h2 className="col-span-1">Status</h2>
              <input
                className="col-span-3 border w-[415px] h-[44px] border-[#E0E0E0]"
                type="text"
                readOnly
                name="status"
                value={formData.status}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute w-[415px] z-10 bg-white border border-gray-300 mt-1">
                  {statusOptions.map((option) => (
                    <div
                      key={option}
                      className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                      onClick={() => handleStatusChange(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
