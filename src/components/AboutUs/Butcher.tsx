import React, { useEffect } from "react";
import profiles from "../../../public/data/profile.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Butcher: React.FC = () => {
  return (
    <div className="h-auto w-full bg-background-fill px-[30px] lg:px-[200px] py-[50px] lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-[40px]">
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          className="w-full lg:w-[50%]"
        >
          <h3 className="text-border-col text-[11px] lg:text-[12px] mb-[10px] uppercase tracking-wider font-bold">
            Our Butcher
          </h3>
          <h1 className="text-primaryText text-[1.9rem] lg:text-[2.5rem] font-semibold tracking-wider">
            Meet The Expert
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInRight"
          className="text-[14px] text-secondaryText w-full lg:w-[50%]"
        >
          Discover our DeliCuts Meats experts—passionate professionals dedicated
          to delivering excellence in every cut. Experience premium quality and
          personalized service for an unparalleled culinary journey.
        </AnimationOnScroll>
      </div>
      <ul className="flex flex-wrap justify-center lg:justify-between items-start">
        {profiles.map((profile) => (
          <AnimationOnScroll
            key={profile.name}
            animateIn="animate__slideInRight"
            className="flex flex-col justify-center items-center"
          >
            <div className="w-full lg:w-[200px] h-auto lg:h-[250px] relative border border-border-col mb-[20px] lg:mb-[40px]">
              <Image
                src={profile.image}
                alt={profile.name}
                width={200}
                height={300}
                className="w-[100%] h-[100%] object-cover relative top-[25px] left-[-20px]"
              />
              <div className="flex justify-center items-center relative left-[-20px] z-30 gap-[10px] bg-[#000000a8] w-full h-[30px]">
                <Link href={profile.facebook}>
                  <FaFacebook className="flex justify-center items-center w-[24px] h-[24px] p-[5px] rounded-full bg-background-main text-[#fff]" />
                </Link>
                <Link href={profile.facebook}>
                  <FaTwitter className="flex justify-center items-center w-[24px] h-[24px] p-[5px] rounded-full bg-background-main text-[#fff]" />
                </Link>
                <Link href={profile.facebook}>
                  <FaInstagram className="flex justify-center items-center w-[24px] h-[24px] p-[5px] rounded-full bg-background-main text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-[16px] lg:text-[17px] font-semibold tracking-wider">
                {profile.name}
              </h2>
              <p className="text-border-col font-semibold text-[11px] tracking-wider mb-[40px] lg:mb-0">
                {profile.title}
              </p>
            </div>
          </AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
};

export default Butcher;
