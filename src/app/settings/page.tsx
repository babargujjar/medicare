"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import icon from "../../assets/settingpage.png";
import useSettings from "@/hooks/useSettings";

const Page = () => {
  const {
    handleChange,
    handleChangePassword,
    handleChangePasswordClick,
    handleCloseModal,
    handleIconClick,
    formData,
    isDropdownOpen,
    isModalOpen,
  } = useSettings();

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div className="px-[30px]">
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px]">
            Settings
          </h2>
          <div className="border bg-white flex justify-between rounded-sm w-[1092px] pl-[28px] pr-[12px] h-[72px] items-center relative">
            <h2 className="font-medium text-[22px]">Settings</h2>
            <div
              className="h-[49px] w-[49px] flex justify-center rounded-sm items-center border cursor-pointer"
              onClick={handleIconClick}
            >
              <Image
                className="w-[29px] h-[29px]"
                src={icon}
                alt="Settings Icon"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-sm z-10">
                <button
                  className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                  onClick={handleChangePasswordClick}
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl mb-4">Change Password</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="oldPassword"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                value={formData.oldPassword}
                name="oldPassword"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={formData.newPassword}
                name="newPassword"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
