"use client"
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import filter from "../../assets/filter.png";
import search from "../../assets/search1.png";
import add from "../../assets/add.png";
import mark from "../../assets/questionmark.png";
import more from "../../assets/more.png";
import Link from "next/link";
import edit from "@/assets/edit.png";
import trash from "@/assets/trash.png";
import usePatients from "@/hooks/usePatients";



const page = () => {
 
  const {
    totalPatients,
    patients,
    selectedPatientIndex,
    toggleOptions,
    deletePatients,
    handleNavigate,
  } = usePatients();

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div>
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px] pl-[30px]">
            Patient Register
          </h2>
          <div className="mx-[30px] w-[1117px]">
            <div className="bg-white w-full mb-[12px] flex justify-between items-center px-[30px] py-[11px]">
              <h2 className="font-medium text-[22px] text-[#1D1D1D]">
                Total Patients{" "}
                <span className="text-[#828282] font-medium text-[22px]">
                  ({totalPatients})
                </span>
              </h2>
              <div className="flex flex-row gap-5">
                <div className="border w-10 h-10 flex justify-center items-center">
                  <Link href={"/addpatients"}>
                    <Image className="w-[17px] h-[17px]" src={add} alt="" />
                  </Link>
                </div>
                <div className="border w-10 h-10 flex justify-center items-center">
                  <Image className="w-[27px] h-[27px]" src={search} alt="" />
                </div>
                <div className="border w-10 h-10 flex justify-center items-center">
                  <Image className="w-[27px] h-[27px]" src={filter} alt="" />
                </div>
                <div className="border w-10 h-10 flex justify-center items-center">
                  <Image className="w-[29px] h-[29px]" src={mark} alt="" />
                </div>
              </div>
            </div>
            <div className="bg-white max-h-[691px] overflow-y-scroll">
              <table className="w-[1095px]">
                <thead className="border-b">
                  <tr className="h-16">
                    <th className="font-normal text-[18px] text-center text-[#828282]">
                      Name
                    </th>
                    <th className="font-normal text-[18px] text-center text-[#828282]">
                      Diagnosis
                    </th>
                    <th className="font-normal text-center text-[18px] text-[#828282]">
                      Status
                    </th>
                    <th className="font-normal text-center text-[18px] text-[#828282]">
                      Last Appointment
                    </th>
                    <th className="font-normal text-center text-[18px] text-[#828282]">
                      Next Appointment
                    </th>
                    <th className="font-normal text-center text-[18px] text-[#828282]">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr className="h-20" key={index}>
                      <td className="font-normal text-center text-[18px] text-[#1D1D1D]">
                        {patient.foreName} {patient.sureName}
                      </td>
                      <td className="font-normal text-center text-[18px] text-[#1D1D1D]">
                        {patient.diasease}
                      </td>
                      <td className="font-normal text-center text-[12px] text-[#27AE60]">
                        <button className="h-5 w-[140px] bg-green-300 rounded-full text-center">
                          {patient.status}
                        </button>
                      </td>
                      <td className="font-normal text-center text-[18px] text-[#1D1D1D]">
                        2/14/2024
                      </td>
                      <td className="font-normal text-center text-[18px] text-[#1D1D1D]">
                        10/20/2024
                      </td>
                      <td>
                        <div className="flex relative cursor-pointer justify-center">
                          <Image
                            className="w-7 h-7 text-[#1D1D1D]"
                            src={more}
                            alt=""
                            onClick={() => toggleOptions(index)}
                          />
                          {selectedPatientIndex === index && (
                            <div className="absolute top-5 p-[6px] border">
                              <div
                                className="flex gap-2 cursor-pointer"
                              >
                                <Image
                                  className="w-5 h-5 mb-2"
                                  src={edit}
                                  alt=""
                                />
                                <h2>Edit</h2>
                              </div>
                              <div
                                onClick={() => deletePatients(patient.id)}
                                className="flex gap-2 cursor-pointer"
                              >
                                <Image className="w-5 h-5" src={trash} alt="" />
                                <h2>Delete</h2>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
