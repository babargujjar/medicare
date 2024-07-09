import Image from 'next/image';
import man from "../../assets/man.png";
import locationicon from "../../assets/location.png";
import time from "../../assets/time.png";
import notification from "../../assets/notification.png";
import useAddAppointmentModal from '@/hooks/useAddAppointmentModal';
import { AppointmentModalProps } from '@/constants/types';


const AppointmentModal: React.FC<AppointmentModalProps> = ({setModal}) => {

  const {
    formData,
    handleDateChange,
    handleDurationChange,
    handleInputChange,
    handleStatusChange,
    handleTypeChange,
    handleconsultionChange,
    submitForm,
  } = useAddAppointmentModal();

  return (
    <div className="absolute top-0 flex justify-center items-center w-[1440px] h-[1426px] mx-auto bg-black bg-opacity-20 z-10">
      <div className="w-[760px] h-[1061px] rounded-sm bg-white">
        <div className="w-[760px] h-[82px] bg-[#0000AC] flex mb-[35px] justify-between px-[31px] items-center">
          <p className="font-bold text-[22px] text-white">New Appoinment</p>
          <button
            className="text-[25px] text-white"
            onClick={() => setModal(false)}
          >
            X
          </button>
        </div>
        <div className="flex justify-evenly items-start mb-[50px]">
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <Image className="w-[24px] h-[24px] mb-2" src={man} alt="" />
            <p className="font-normal text-[18px] text-[#2F80ED]">
              PRACTITIONER
            </p>
            <p className="font-normal text-[16px]">name</p>
            <p className="font-bold text-[16px]">General Doctor</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[6px]">
            <Image className="w-[24px] h-[24px] mb-2" src={time} alt="" />
            <p className="font-normal text-[18px] text-[#2F80ED]">
              DATE AND TIME
            </p>
            <p className="font-normal text-[16px]">Time</p>
            <p className="font-bold text-[16px]">9:00</p>
            <div className="relative text-center">
              <button className="font-normal text-[13px] text-[#2F80ED]">
                Change
              </button>
              <input
                type="datetime-local"
                className="input-with-calendar absolute top-0 right-0 opacity-0"
                name="dateAndTime"
                value={formData.dateAndTime}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[6px]">
            <Image
              className="w-[24px] h-[24px] mb-2"
              src={locationicon}
              alt=""
            />
            <p className="font-normal text-[18px] text-[#2F80ED]">LOCATION</p>
            <p className="font-normal text-[16px]">General clinic</p>
            <p className="font-bold text-[16px]">Room {"1"}</p>
            <button className="font-normal text-[13px] text-[#2F80ED]">
              Change
            </button>
          </div>
        </div>
        <div className="px-[28px]">
          <div className="grid grid-cols-4 mb-[18px]">
            <h2 className="col-span-1 text-[18px] font-normal">Patient</h2>
            <input
              className="col-span-3 border w-[415px] rounded-md h-[44px] border-[#E0E0E0]"
              type="text"
              onChange={handleInputChange}
              name="patient"
              value={formData.patient}
            />
          </div>
          <div className="grid grid-cols-4 mb-[18px]">
            <h2 className="col-span-1 text-[18px] font-normal">
              Purpose of visit
            </h2>
            <textarea
              onChange={handleInputChange}
              name="purposeOfVisit"
              value={formData.purposeOfVisit}
              className="col-span-3 border rounded-md w-[415px] h-[84px] border-[#E0E0E0]"
            />
          </div>
          <div className="grid grid-cols-4 mb-[20px]">
            <h2 className="col-span-1 text-[18px] font-normal">
              Appoinment Status
            </h2>
            <div className="col-span-3 flex  gap-2">
              <button
                onClick={() => handleStatusChange("Confirmation required")}
                className={`w-[182px] h-[44px] ${
                  formData.appointmentStatus === "Confirmation required"
                    ? "selected"
                    : ""
                } focus:text-white rounded-md bg-[#FAFAFA] font-normal text-[16px] flex justify-center items-center`}
              >
                Confirmation required
              </button>
              <button
                onClick={() => handleStatusChange("Confirmed")}
                className={`h-[44px] text-[16px] ${
                  formData.appointmentStatus === "Confirmed" ? "selected" : ""
                } rounded-md w-[102px] bg-[#FAFAFA]`}
              >
                Confirmed
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 mb-[20px]">
            <h2 className="col-span-1 text-[18px] font-normal">Duration</h2>
            <div className="col-span-3 flex  gap-[10px]">
              <button
                onClick={() => handleDurationChange("10'")}
                className={`h-[44px] ${
                  formData.duration === "10'" ? "selected" : ""
                } w-[44px] rounded-md bg-[#FAFAFA] font-normal text-[16px] flex justify-center items-center`}
              >
                10'
              </button>
              <button
                onClick={() => handleDurationChange("20'")}
                className={`h-[44px] ${
                  formData.duration === "20'" ? "selected" : ""
                }  w-[44px] rounded-md bg-[#FAFAFA]`}
              >
                20'
              </button>
              <button
                onClick={() => handleDurationChange("30'")}
                className={`h-[44px] ${
                  formData.duration === "30'" ? "selected" : ""
                }  w-[44px] rounded-md bg-[#FAFAFA]`}
              >
                30'
              </button>
              <button
                onClick={() => handleDurationChange("40'")}
                className={`h-[44px] ${
                  formData.duration === "40'" ? "selected" : ""
                }  w-[44px] rounded-md bg-[#FAFAFA]`}
              >
                40'
              </button>
              <button
                onClick={() => handleDurationChange("50'")}
                className={`h-[44px] ${
                  formData.duration === "50'" ? "selected" : ""
                }  w-[44px] rounded-md bg-[#FAFAFA]`}
              >
                50'
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 mb-[20px]">
            <h2 className="col-span-1 text-[18px] font-normal">
              Appoinment Type
            </h2>
            <div className="col-span-3 flex  gap-2">
              <button
                onClick={() => handleTypeChange("First Time")}
                className={`w-[98px] ${
                  formData.appointmentType === "First Time" ? "selected" : ""
                } h-[44px] rounded-md bg-[#FAFAFA] font-normal text-[18px] flex justify-center items-center`}
              >
                First Time
              </button>
              <button
                onClick={() => handleTypeChange("Follow up visit")}
                className={`h-[44px] ${
                  formData.appointmentType === "Follow up visit"
                    ? "selected"
                    : ""
                } text-[18px] rounded-md w-[132px] bg-[#FAFAFA]`}
              >
                Follow up visit
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 mb-[80px]">
            <h2 className="col-span-1 text-[18px] font-normal">
              Online consultation
            </h2>
            <div className="col-span-3 flex gap-2">
              <button
                onClick={() => handleconsultionChange("Yes")}
                className={` h-[44px] ${
                  formData.consultationType === "Yes" ? "selected" : ""
                } rounded-md px-2 bg-[#FAFAFA] font-normal text-[16px] flex justify-center items-center`}
              >
                Yes
              </button>
              <button
                onClick={() => handleconsultionChange("No")}
                className={`h-[44px] ${
                  formData.consultationType === "No" ? "selected" : ""
                } text-[16px] px-2 rounded-md bg-[#FAFAFA]`}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <Image className="w-6 h-6" src={notification} alt="" />
              <h2 className="font-bold text-[18px]">Send Notification</h2>
            </div>
            <p className="font-normal text-[16px] text-[#333333] mb-[64px]">
              Appointment confirmation and reminder messages will be
              automatically sent to clinic SMS notification settings.
            </p>
          </div>
          <div className="text-end flex gap-[31px] justify-end">
            <button className="font-medium text-[16px] text-[#000000]">
              Cancel
            </button>
            <button className="w-[158px] text-white h-[41px] rounded-md bg-[#0000AC] font-medium text-[16px]flex justify-center items-center">
              Begin Appoinment
            </button>
            <button
              onClick={submitForm}
              className="w-[55px] h-[41px] border rounded-md border-[#0000AC] text-[#0000AC] flex justify-center items-center font-medium text-[16px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal