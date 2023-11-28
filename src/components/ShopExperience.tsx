import React from "react";
import styles from "../styles/style.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ShopExperience = () => {
  return (
    <div
      className={`${styles.shopExp} lg:h-[40dvh] w-[100%] flex justify-center items-center px-[20px] py-[30px] lg:py-0 lg:px-[200px]`}
    >
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        className="flex justify-start gap-1 lg:gap-0 lg:justify-between items-start lg:items-center font-Lato w-full"
      >
        <div className="text-primaryText flex flex-col items-center">
          <h1 className=" text-[1.6rem] lg:text-[2.8rem] font-semibold relative">
            100
            <sup className="text-border-col text-[0.9rem] lg:text-[1rem]  absolute top-[13px] right-[-10px]">
              +
            </sup>
          </h1>
          <h4 className="font-semibold text-[0.8rem] text-center lg:text-[1.1rem]">
            Daily Customers
          </h4>
        </div>
        <div className="text-primaryText flex flex-col items-center">
          <h1 className="text-[1.6rem] lg:text-[2.8rem] font-semibold relative">
            20
            <sup className="text-border-col text-[0.9rem] lg:text-[1rem] absolute top-[13px] right-[-10px]">
              +
            </sup>
          </h1>
          <h4 className="font-semibold text-[0.8rem] text-center lg:text-[1.1rem]">
            Professional Butchers
          </h4>
        </div>
        <div className="text-primaryText flex flex-col items-center">
          <h1 className="text-[1.6rem] lg:text-[2.8rem] font-semibold relative">
            50
            <sup className="text-border-col text-[0.9rem] lg:text-[1rem]  absolute top-[13px] right-[-10px]">
              +
            </sup>
          </h1>
          <h4 className="font-semibold text-[0.8rem] lg:text-[1.1rem]">
            Vendors
          </h4>
        </div>
        <div className="text-primaryText flex flex-col items-center">
          <h1 className="text-[1.6rem] lg:text-[2.8rem] font-semibold relative">
            10
            <sup className="text-border-col text-[0.9rem] lg:text-[1rem]  absolute top-[13px] right-[-10px]">
              +
            </sup>
          </h1>
          <h4 className="font-semibold text-[0.8rem] lg:text-[1.1rem]">
            Partners
          </h4>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default ShopExperience;
