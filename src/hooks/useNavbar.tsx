"use client";
import { getSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface userdata {
  user: {
    name: String;
    email: String;
  };
}
const useNavbar = () => {
  const [user, setUser] = useState<userdata | null>();

  const logout = () => {
    signOut({ redirect: false }).then(() => {
      toast.success("User logged out successfully!");
      setTimeout(() => {
        window.location.href = "/signin";
      }, 2000);
    });
  };

  useEffect(() => {
    const getData = async () => {
      const userData = await getSession();
      setUser(userData as userdata);
    };
    getData();
  }, []);

  const currentDate = () => {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options as {});
    return formattedDate;
  };
  return {
    user,
    currentDate,
    logout,
  };
};

export default useNavbar;
