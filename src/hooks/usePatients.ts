"use client";
import { deletePatient, fetchPatient } from "@/store/slices/patients";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Patient {
  foreName: string;
  sureName: string;
  diasease: string;
  status: string;
  id: string;
}

const usePatients = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState<
    number | null
  >(null);
  const data = useAppSelector((state) => state.patients.patientData);
  const totalPatients = data.length;

  useEffect(() => {
    setPatients(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchPatient());
  }, [dispatch]);

  const toggleOptions = (index: number) => {
    if (selectedPatientIndex === index) {
      setSelectedPatientIndex(null);
      setShowOptions(false);
    } else {
      setSelectedPatientIndex(index);
      setShowOptions(true);
    }
  };

  const deletePatients = async (id: string) => {
    await dispatch(deletePatient(id));
  };

  const handleNavigate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    patient: Patient
  ) => {
    e.preventDefault();
    const patientData = JSON.stringify(patient);
    router.push(
      `/updatePatients?patientData=${encodeURIComponent(patientData)}`
    );
  };

  return {
    totalPatients,
    patients,
    selectedPatientIndex,
    toggleOptions,
    deletePatients,
    handleNavigate,
  };
};

export default usePatients;
