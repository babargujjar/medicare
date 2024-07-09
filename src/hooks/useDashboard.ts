"use client";
import { fetchAppointment } from "@/store/slices/appointments";
import { fetchPatient } from "@/store/slices/patients";
import { fetchUserData } from "@/store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { useEffect, useState } from "react";

const useDashboard = () => {
  const [appointmentData, setAppointmentData] = useState<any>([]);
  const [patients, setPatients] = useState<any>([]);
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.appointment.appointmentData);

  useEffect(() => {
    setAppointmentData(data);
  }, [data]);

  // useEffect(() => {
  //   dispatch(fetchAppointment());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  const patientsData = useAppSelector((state) => state.patients.patientData);

  useEffect(() => {
    setPatients(patientsData);
  }, [patientsData]);

  // useEffect(() => {
  //   dispatch(fetchPatient());
  // }, [dispatch]);
    useEffect(() => {
      if (typeof window !== "undefined") {
        dispatch(fetchAppointment());
        dispatch(fetchUserData());
        dispatch(fetchPatient());
      }
    }, [dispatch]);
  const totalPatients = patients.length;

  const filteredOfflineAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "Yes")
  );

  const offlineConsaltaion = filteredOfflineAppointments?.length;

  const filteredOnlineAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "No")
  );

  const onlineConsaltaion = filteredOnlineAppointments?.length;

  const time = ["8:00", "9:00", "10:00", "11:00"];

  return {
    offlineConsaltaion,
    onlineConsaltaion,
    totalPatients,
    patients,
    appointmentData,
  };
};

export default useDashboard;
