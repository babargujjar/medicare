import Image from "next/image";
import graydot from "@/assets/graydot.png";
import dropdoen from "@/assets/dropdown.png";
import user from "@/assets/newuser.png";
import edit from "@/assets/edit.png";
import plusicon from "@/assets/blueplus.png";
import trash from "@/assets/trash.png";
import blackdot from "@/assets/blackdot.png";
import useUpComingSchedule from "@/hooks/useUpComingSchedule";
import { Appointment } from "@/constants/types";

const UpComingSchedule = () => {
  
  const {timeSlot,getAppointmentsForTimeSlot,selectedAppointment,handleAppointmentClick} = useUpComingSchedule()

  return (
    <div className="bg-[#FFFFFF] overflow-hidden mt-5 max-w-[384px] w-full py-5 px-4 rounded-md">
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold text-[15px]">Upcoming Schedule</h2>
          <div className="flex gap-2 justify-center">
            <button className="font-semibold text-[15px] text-[#0000AC]">
              New Appointment
            </button>
            <div className="cursor-pointer border-[#0000AC] w-[23px] flex justify-center items-center h-[23px] border ">
              <Image className="w-[10px] h-[10px]" src={plusicon} alt="" />
            </div>
          </div>
        </div>
        <div>
          {timeSlot.map((time) => (
            <div key={time} className="flex mt-4 gap-8">
              <p className="font-normal text-[12px]">{time}</p>
              <div>
                <div className="relative">
                  <Image
                    className="w-[10px] top-0 mt-1 h-[10px] text-center"
                    src={blackdot}
                    alt=""
                  />
                </div>
                {getAppointmentsForTimeSlot(time).map(
                  (appointment: Appointment, index: number) => (
                    <div key={index} className="flex flex-col">
                      <div
                        className={`flex py-2 rounded-md justify-between my-[10px] pl-2 ml-4 w-full items-center ${
                          selectedAppointment === appointment.id
                            ? "border"
                            : ""
                        }`}
                        onClick={() => handleAppointmentClick(appointment.id)}
                      >
                        <Image
                          className="w-[8px] mr-1 h-[8px]"
                          src={graydot}
                          alt=""
                        />
                        <p className="text-[#828282] font-bold text-[12px]">
                          {new Date(appointment.dateAndTime).toLocaleTimeString(
                            [],
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            }
                          )}
                        </p>
                        <h2 className="font-normal ml-2  text-[11px] text-[#828282]">
                          {appointment.patient}
                        </h2>
                        <div className="flex ml-[25px] mr-2 gap-2">
                          <h2 className="font-normal  text-[11px] text-[#828282]">
                            Upcoming
                          </h2>
                          <div className="border w-[18px] h-[18px] text-center rounded-md">
                            <Image
                              className="w-[13px] ml-[2px] h-[13px]"
                              src={dropdoen}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      {selectedAppointment === appointment.id && (
                        <div className="ml-4 py-[11px] w-full rounded-md border">
                          <div className="flex mx-[11px] items-center gap-4">
                            <div className="flex flex-col">
                              <h2 className="font-semibold mb-2 text-[11px]">
                                Patient
                              </h2>
                              <h2 className="font-semibold mb-2 text-[11px]">
                                Time
                              </h2>
                              <h2 className="font-semibold mb-2 text-[11px]">
                                Purpose
                              </h2>
                            </div>
                            <div>
                              <h2 className="font-normal mb-2 text-[11px]">
                                {appointment.patient}
                              </h2>
                              <h2 className="font-normal mb-2 text-[11px]">
                                {new Date(
                                  appointment.dateAndTime
                                ).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: false,
                                })}
                              </h2>
                              <h2 className="font-normal mb-2 text-[11px]">
                                {appointment.purposeOfVisit}
                              </h2>
                            </div>
                          </div>
                          <hr />
                          <div className="flex mx-[11px] items-center mt-[11px] justify-between">
                            <div className="flex gap-[10px]">
                              <div className="border rounded-md cursor-pointer">
                                <Image
                                  className="w-[10px] h-[10px] m-1"
                                  src={trash}
                                  alt=""
                                />
                              </div>
                              <div className="border rounded-md cursor-pointer">
                                <Image
                                  className="w-[10px] h-[10px] m-1"
                                  src={user}
                                  alt=""
                                />
                              </div>
                              <div className="border rounded-md cursor-pointer">
                                <Image
                                  className="w-[10px] h-[10px] m-1"
                                  src={edit}
                                  alt=""
                                />
                              </div>
                            </div>
                            <button className="bg-[#0000AC] rounded-md text-[#FFFFFF] font-medium text-[10px] py-[5px] px-[9px]">
                              Begin appointment
                            </button>
                          </div>
                        </div>
                      )}
                      {/* <div className="ml-4 py-[11px] w-full rounded-md border">
                        <div className="flex mx-[11px] items-center gap-4">
                          <div className="flex flex-col">
                            <h2 className="font-semibold mb-2 text-[11px]">
                              Patient
                            </h2>
                            <h2 className="font-semibold mb-2 text-[11px]">
                              Time
                            </h2>
                            <h2 className="font-semibold mb-2 text-[11px]">
                              Purpose
                            </h2>
                          </div>
                          <div>
                            <h2 className="font-normal mb-2 text-[11px]">
                              {appointment.patient}
                            </h2>
                            <h2 className="font-normal mb-2 text-[11px]">
                              {new Date(
                                appointment.dateAndTime
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                              })}
                            </h2>
                            <h2 className="font-normal mb-2 text-[11px]">
                              {appointment.purposeOfVisit}
                            </h2>
                          </div>
                        </div>
                        <hr />
                        <div className="flex mx-[11px] items-center mt-[11px] justify-between">
                          <div className="flex gap-[10px]">
                            <div className="border rounded-md cursor-pointer">
                              <Image
                                className="w-[10px] h-[10px] m-1"
                                src={trash}
                                alt=""
                              />
                            </div>
                            <div className="border rounded-md cursor-pointer">
                              <Image
                                className="w-[10px] h-[10px] m-1"
                                src={user}
                                alt=""
                              />
                            </div>
                            <div className="border rounded-md cursor-pointer">
                              <Image
                                className="w-[10px] h-[10px] m-1"
                                src={edit}
                                alt=""
                              />
                            </div>
                          </div>
                          <button className="bg-[#0000AC] rounded-md text-[#FFFFFF] font-medium text-[10px] py-[5px] px-[9px]">
                            Begin appointment
                          </button>
                        </div>
                      </div> */}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingSchedule;
