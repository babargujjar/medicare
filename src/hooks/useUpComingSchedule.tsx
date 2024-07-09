"use client"
import { fetchAppointment } from '@/store/slices/appointments';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import React, { useEffect, useState } from 'react'

const useUpComingSchedule = () => {
    const today = new Date();
    const timeSlot = ["8:00", "9:00", "10:00", "11:00"];
    const dispatch = useAppDispatch();
    const [appointments, setAppointment] = useState<any>([]);
    const [todaysAppointments, setTodaysAppointments] = useState<any>([]);
    const [selectedAppointment, setSelectedAppointment] = useState<
      string | null
    >(null);

    const data = useAppSelector((state) => state.appointment.appointmentData);

    useEffect(() => {
      setAppointment(data);
    }, [data]);

    useEffect(() => {
      dispatch(fetchAppointment());
    }, [dispatch]);

    useEffect(() => {
      const todayAppointments = appointments?.filter((appointment: any) => {
        const appointmentDate = new Date(appointment.dateAndTime);
        return (
          appointmentDate.getFullYear() === today.getFullYear() &&
          appointmentDate.getMonth() === today.getMonth() &&
          appointmentDate.getDate() === today.getDate()
        );
      });
      setTodaysAppointments(todayAppointments);
    }, [appointments]);

    const getAppointmentsForTimeSlot = (slot: string) => {
      const slotHour = parseInt(slot.split(":")[0], 10);
      return todaysAppointments.filter((appointment: any) => {
        const appointmentDate = new Date(appointment.dateAndTime);
        const appointmentHour = appointmentDate.getHours();
        return appointmentHour === slotHour;
      });
    };

    const handleAppointmentClick = (appointmentId: string) => {
      setSelectedAppointment(
        appointmentId === selectedAppointment ? null : appointmentId
      );
    };
    
  return {
    timeSlot,
    getAppointmentsForTimeSlot,
    selectedAppointment,
    handleAppointmentClick,
  };
}

export default useUpComingSchedule