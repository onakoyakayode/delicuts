import DownNavbar from "@/components/Navbars/DownNavbar";
import TopNavbar from "@/components/Navbars/TopNavbar";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-background-main">
      <TopNavbar />
      <DownNavbar />
    </div>
  );
};

export default Navbar;
