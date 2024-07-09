"use client"
import { useEffect } from "react";

const page =()=> {

  useEffect(() => {
     window.location.assign("/dashboard");
  }, []);

  // You can return null or any loading indicator while the redirect happens
  return null;
}
export default page;