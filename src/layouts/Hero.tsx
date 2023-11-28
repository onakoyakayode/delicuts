import React from "react";
// import Delicuts from "../assets/images/delicuts.png";
import styles from "../styles/style.module.css";
// import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`${styles.heroBg} h-[90dvh] bg-cover w-full bg-bottom flex justify-center items-center text-primaryText`}
    >
      <div className="flex flex-col justify-center items-center px-[20px] lg:px-[300px]">
        <h1 className="font-bold relative font-zuume-rough flex flex-col justify-center items-center text-[5rem] lg:text-[7rem] leading-[4rem] lg:leading-[5.5rem] tracking-wider animate__animated animate__backInLeft animate__delay-1s">
          Delicuts <span>Meats</span>
          <sup className="text-[0.8rem] lg:text-[1rem] tracking-normal absolute top-[-3px] right-[-10px]">
            NG
          </sup>
        </h1>
        <p className="text-border-col uppercase text-[11px] lg:text-[12px] font-semibold tracking-[5px] my-[15px] animate__animated animate__fadeIn animate__delay-2s">
          Welcome to Delicuts
        </p>
        <h1 className="text-[1.8rem] lg:text-[4rem] font-bold mb-[15px] animate__animated animate__fadeInUp animate__delay-2s">
          Live. Love. & Meat
        </h1>
        <h6 className="text-[14px] lg:text-[15px] text-center text-[#d1c5c5] mb-[45px] animate__animated animate__fadeInUp animate__delay-2s">
          At Delicuts, we take pride in delivering the freshest, locally-sourced
          meats, expertly prepared by our skilled butchers. Our dedication to
          sustainable and ethical practices ensures that you receive meat
          products you can savor with a clear conscience.
        </h6>
        <div className="flex flex-row lg:flex-row justify-normal items-center gap-3 lg:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
          <button className="h-[2.5rem] lg:h-[45px] rounded-[5px] bg-secondary-bg w-[8rem] lg:w-[160px] uppercase text-[11px] tracking-widest font-medium">
            View Product
          </button>
          <button className="h-[2.5rem] lg:h-[45px] rounded-[5px] w-[6rem] lg:w-[160px] bg-background-main uppercase text-[11px] tracking-widest font-medium">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
