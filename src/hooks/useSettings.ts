"use client";
import { fetchUserData } from "@/store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import axios from "axios";
import { useEffect, useState } from "react";

const useSettings = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userData?.hashedPassword) {
      setFormData((prevState) => ({
        ...prevState,
        hashedPassword: userData.hashedPassword,
      }));
    }
  }, [userData]);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    hashedPassword: "",
  });

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangePassword = async () => {
    try {
      const response = await axios.put("/api/reset", formData);
      console.log("User password updated:", response.data);
      console.log("Password Reset Successfull", "success");
      dispatch(fetchUserData());
    } catch (error) {
      console.error("Error updating user password:", error);
      console.log("Error in Reset Password", "error");
    }
  };

  const handleChangePasswordClick = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return {
    handleChange,
    handleChangePassword,
    handleChangePasswordClick,
    handleCloseModal,
    handleIconClick,
    formData,
    isDropdownOpen,
    isModalOpen,
  };
};

export default useSettings;
