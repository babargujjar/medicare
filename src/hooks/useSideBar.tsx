"use client"
import React, { useEffect, useState } from 'react'

const useSideBar = () => {
    const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

    useEffect(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const selectedItemParam = params.get("selectedItem");
        const pathname = window.location.pathname;

        if (selectedItemParam) {
          setSelectedItem(selectedItemParam);
        } else {
          if (pathname.includes("dashboard")) {
            setSelectedItem("Dashboard");
          } else if (pathname.includes("schedule")) {
            setSelectedItem("Schedule");
          } else if (pathname.includes("patients")) {
            setSelectedItem("Patients");
          } else if (pathname.includes("setting")) {
            setSelectedItem("Setting");
          }
        }
      }
    }, [typeof window !== "undefined" ? window.location.search : undefined]);

    const handleItemClick = (itemName: string) => {
      setSelectedItem(itemName);
      if (window.innerWidth <= 768) {
        // handleToggleSidebar();
      }
    };

  return {
selectedItem,
handleItemClick
  }
}

export default useSideBar