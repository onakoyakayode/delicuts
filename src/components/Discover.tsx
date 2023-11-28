import React from "react";
import styles from "../styles/style.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Discover = () => {
  return (
    <div
      className={`${styles.shopExp} w-[100%] flex flex-col justify-center items-center px-[30px] py-[25px] lg:py-[50px] lg:px-[200px]`}
    >
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        className="flex flex-col justify-start items-center font-Lato w-full"
      >
        <h1 className="text-primaryText text-[1.5rem] text-center lg:text-left lg:text-[2.3rem] mb-[10px] font-semibold tracking-wider">
          We Provide Fresh Meat Every Day
        </h1>
        <p className="text-[12px] lg:text-[13px] text-secondaryText w-full lg:w-[80%] text-center mb-[17px] lg:mb-[20px]">
          Welcome to a culinary haven where freshness meets flavor every day. At
          Delicuts, we take pride in delivering the finest selection of fresh
          meats straight to your table. Our commitment to quality ensures a
          daily feast of premium cuts, providing you with the essence of
          farm-fresh goodness in every bite.
        </p>
        <button className="text-primaryText bg-secondary-bg flex justify-center opacity-90 hover:opacity-100 items-center text-[12px] uppercase tracking-widest font-medium px-[25px] py-[10px] rounded-sm">
          Discover More
        </button>
      </AnimationOnScroll>
    </div>
  );
};

export default Discover;
