"use client"
import { postAppointment } from '@/store/slices/appointments';
import { useAppDispatch } from '@/store/storeHook';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useAddAppointmentModal = () => {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
      dateAndTime: "",
      patient: "",
      purposeOfVisit: "",
      appointmentStatus: "",
      duration: "",
      appointmentType: "",
      consultationType: "",
    });

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (status: string) => {
      setFormData((prevState) => ({
        ...prevState,
        appointmentStatus: status,
      }));
    };
    const handleDurationChange = (duration: string) => {
      setFormData((prevState) => ({
        ...prevState,
        duration: duration,
      }));
    };
    const handleTypeChange = (type: string) => {
      setFormData((prevState) => ({
        ...prevState,
        appointmentType: type,
      }));
    };
    const handleconsultionChange = (type: string) => {
      setFormData((prevState) => ({
        ...prevState,
        consultationType: type,
      }));
    };

    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const submitForm = async () => {
      try {
        await dispatch(postAppointment(formData));

        setFormData({
          dateAndTime: "",
          patient: "",
          purposeOfVisit: "",
          appointmentStatus: "",
          duration: "",
          appointmentType: "",
          consultationType: "",
        });
      } catch (error) {
        toast.error("Error Creating Appointment please try again");
      }
    };
  return {
    formData,
    handleDateChange,
    handleDurationChange,
    handleInputChange,
    handleStatusChange,
    handleTypeChange,
    handleconsultionChange,
    submitForm,
  };
}

export default useAddAppointmentModal