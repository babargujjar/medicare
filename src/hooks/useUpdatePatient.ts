// "use client";
import axios from "axios";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useUpdatePatient = () => {
  // const router = useRouter();

  const [formData, setFormData] = useState({
    foreName: "",
    sureName: "",
    dateBirth: "",
    gender: "",
    diasease: "",
    note: "",
    phone: "",
    status: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleStatusChange = (status: string) => {
    setFormData((prevState) => ({
      ...prevState,
      status: status,
    }));
    setDropdownOpen(false);
  };

  const statusOptions = ["on treatment", "Awaiting surgery", "Recovered"];

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenderChange = (gender: string) => {
    setFormData((prevState) => ({
      ...prevState,
      gender: gender,
    }));
  };

  const submitData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      formData.foreName &&
      formData.sureName &&
      formData.dateBirth &&
      formData.gender &&
      formData.diasease &&
      formData.note &&
      formData.phone &&
      formData.status
    ) {
      const response = await axios.post("/api/addPatients", formData);
      toast.success("Patient added successfully!");
    } else {
      alert("All fields are required!");
    }
  };

  // useEffect(() => {
  //   const { patientData } = router.query;
  //   if (patientData) {
  //     const patient = JSON.parse(patientData as any);
  //     setFormData(patient);
  //   }
  // }, [router.query]);

  return {
    handleChange,
    handleGenderChange,
    handleStatusChange,
    submitData,
    formData,
    statusOptions,
    dropdownOpen,
    toggleDropdown,
  };
};

export default useUpdatePatient;
