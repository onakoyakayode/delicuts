import Image from "next/image";
import React from "react";
import delicutLogo from "../assets/images/delicuts.png";
import Link from "next/link";
import links from "../../public/data/links.json";
import { CgEditBlackPoint } from "react-icons/cg";
import products from "../../public/data/products.json";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="px-[20px] lg:px-[200px] pt-[50px] lg:pt-[100px] pb-[50px] w-full bg-background-main">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-start gap-5 items-start w-[100%]">
        <Link
          href="/"
          className="w-full lg:w-[25%] flex justify-start lg:justify-center"
        >
          <Image
            src={delicutLogo}
            alt=""
            className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] object-cover"
          />
        </Link>
        <div className="flex flex-wrap lg:flex-row justify-between items-start w-full">
          <div className="text-primaryText w-[50%] lg:w-[25%] mt-[20px] lg:mt-0 flex flex-col items-start lg:items-center">
            <h3 className="text-[15px] lg:text-[16px] font-semibold mb-[20px]">
              Quick Links
            </h3>
            <ul className="flex flex-col items-start">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  className="flex justify-start items-center gap-[10px] mb-[10px]"
                >
                  <CgEditBlackPoint className="text-border-col w-[16px] h-[16px]" />
                  <Link
                    href={link.url}
                    className="text-[14px] lg:text-[15px] text-secondaryText font-light hover:scale-110  hover:font-normal transition-all duration-150 ease-in-out"
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="text-primaryText w-[50%] mt-[20px] lg:mt-0 lg:w-[25%] flex flex-col items-start flo">
            <h3 className="text-[15px] lg:text-[16px] font-semibold mb-[20px]">
              Product
            </h3>
            <ul className="flex flex-col items-start">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex justify-start items-center gap-[10px] mb-[10px]"
                >
                  <CgEditBlackPoint className="text-border-col w-[16px] h-[16px]" />
                  <Link
                    href={product.url}
                    className="text-[15px] text-secondaryText font-light hover:scale-110  hover:font-normal transition-all duration-150 ease-in-out"
                  >
                    {product.text}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="text-primaryText w-[100%] mt-[20px] lg:mt-0 lg:w-[25%] flex flex-col items-start">
            <h3 className="text-[15px] lg:text-[16px] font-semibold mb-[20px]">
              Information
            </h3>
            <ul className="flex flex-col items-start lg:items-center gap-[15px]">
              <div className="flex items-center justify-start gap-[10px]">
                <BiPhoneCall className="text-border-col w-[24px] h-[24px] " />
                <Link
                  href="tel:08190919293"
                  className="text-[15px] text-secondaryText w-[150px] font-light hover:scale-105  hover:font-normal transition-all duration-150 ease-in-out"
                >
                  08190919293
                </Link>
              </div>
              <div className="flex items-center justify-start gap-[10px]">
                <GoMail className="text-border-col w-[24px] h-[24px] " />
                <Link
                  href="mailto:mail@delicuts.com"
                  className="text-[15px] text-secondaryText w-[150px] underline font-light hover:scale-105  hover:font-normal transition-all duration-150 ease-in-out"
                >
                  mail@delicuts.com
                </Link>
              </div>
              <div className="flex items-center justify-start gap-[10px]">
                <SlLocationPin className="text-border-col w-[24px] h-[24px] " />
                <Link
                  href="mailto:mail@delicuts.com"
                  className="text-[15px] text-secondaryText w-full lg:w-[150px] font-light hover:scale-105  hover:font-normal transition-all duration-150 ease-in-out"
                >
                  4, Adebayo Shittu, Magodo, Lagos, Nigeria
                </Link>
              </div>
            </ul>
            <div className="mt-[15px]">
              <h3 className="mb-[10px] font-semibold text-[15px]">
                Follow Us On:
              </h3>
              <div className="flex justify-normal items-center gap-4 text-primaryText">
                <Link href={"/"} className="cursor-pointer">
                  <CgFacebook className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
                </Link>
                <IoLogoTwitter className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
                <IoLogoInstagram className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
                <IoLogoYoutube className="h-6 w-6 py-1 px-1 rounded-full border border-border-col flex justify-center items-center" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[100px]">
        <div className="w-[100%] h-[1px] bg-border-col mb-[15px]"></div>
        <small className="text-secondaryText text-[12px]">
          Copyright 2023 &copy; All Right Reserved Design by{" "}
          <Link href="" className="text-[16px] font-semibold text-border-col">
            Onakoya Kayode
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
