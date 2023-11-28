import Link from "next/link";
import React from "react";
import { CgFacebook, CgPhone } from "react-icons/cg";
import {
  IoLocationSharp,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const TopNavbar = () => {
  return (
    <>
      <nav className="px-[200px] w-full hidden lg:flex justify-between items-center h-[50px] text-[#d1c5c5] bg-background-main border-b border-[#fff]">
        <Link
          href="tel:+2349091929192"
          className="flex justify-start gap-2 items-center text-[13px] font-medium"
        >
          <CgPhone className=" text-border-col w-[20px] h-[20px]" />
          09091929192
        </Link>
        <div className="flex justify-start items-center gap-2">
          <IoLocationSharp className="text-border-col w-[20px] h-[20px]" />
          <p className="text-[11px] uppercase font-medium">Lagos Only</p>
        </div>
        <div className="flex justify-normal items-center gap-4 text-primaryText">
          <Link href={"/"} className="cursor-pointer">
            <CgFacebook className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          </Link>
          <IoLogoTwitter className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          <IoLogoInstagram className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          <IoLogoYoutube className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
        </div>
      </nav>
      {/* Mobile View */}
      <nav className="px-[10px] w-full flex lg:hidden justify-between items-center h-[50px] text-[#d1c5c5] bg-background-main border-b border-[#fff]">
        <Link
          href="tel:+2349091929192"
          className="flex justify-start gap-1 items-center text-[12px] font-medium"
        >
          <CgPhone className=" text-border-col w-[17px] h-[17px]" />
          09091929192
        </Link>
        <div className="flex justify-start items-center gap-1">
          <IoLocationSharp className="text-border-col w-[17px] h-[17px]" />
          <p className="text-[11px] uppercase font-medium">Lagos Only</p>
        </div>
        <div className="flex justify-normal items-center gap-[.2rem] text-primaryText">
          <Link href={"/"} className="cursor-pointer">
            <CgFacebook className="sm:h-4 h-6 sm:w-4 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          </Link>
          <IoLogoTwitter className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          <IoLogoInstagram className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
          <IoLogoYoutube className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
