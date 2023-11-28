import React from "react";
import { FaAward } from "react-icons/fa";
import { MdGppGood, MdOutlineDeliveryDining } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import butcherShop from "../assets/images/hero-min-2.jpg";
import { TbRibbonHealth } from "react-icons/tb";

const WhyChooseUs = () => {
  const choosePackage = [
    {
      id: 1,
      title: "Excellence",
      content:
        "We consistently strive for and deliver excellence in providing the highest quality meats to our customers.",
      icon: <FaAward className="w-[50px] h-[50px] text-[yellow]" />,
    },
    {
      id: 2,
      title: "Expertise",
      content:
        "Backed by a team of experts, we bring a wealth of knowledge and skill to ensure our customers receive meats of unparalleled quality.",
      icon: <MdGppGood className="w-[50px] h-[50px] text-[yellow]" />,
    },
    {
      id: 3,
      title: "Healthy",
      content:
        "Our health-focused processes at DeliCuts Meats are marked by precision, from carefully selecting premium cuts to ensuring safe delivery. ",
      icon: <TbRibbonHealth className="w-[50px] h-[50px] text-[yellow]" />,
    },
  ];

  return (
    <div className="w-full px-[20px] py-[50px] lg:px-[200px] lg:py-[100px] bg-background-fill">
      <div className="flex flex-col items-start lg:flex-row lg:justify-center lg:items-start font-Lato w-full lg:gap-[50px]">
        <div className="flex flex-col items-start w-full lg:w-[50%]">
          <AnimationOnScroll animateIn="animate__slideInLeft">
            <h3 className="text-border-col uppercase text-[11px] lg:text-[12px] mb-[14px] lg:mb-[16px] font-semibold tracking-wide">
              Why choose Us
            </h3>
            <h1 className=" text-primaryText text-[1.6rem] lg:text-[2.5rem] w-full lg:w-[70%] leading-tight capitalize font-medium mb-[14px] lg:mb-[16px]">
              Choose the best, choose us
            </h1>
            <p className="text-[13px] lg:text-[14px] text-secondaryText mb-[16px] lg:mb-[20px]">
              Welcome to excellence! Choose the best, choose us. We&apos;re
              thrilled to have you here as we embark on a journey of exceptional
              quality and satisfaction together. Let&apos;s make every
              experience with us remarkable.
            </p>
          </AnimationOnScroll>
          <ul className="w-[100%]">
            {choosePackage.map((item) => (
              <AnimationOnScroll
                key={item.id}
                animateIn="animate__slideInLeft"
                className="h-[100px] w-full mb-[20px] bg-background-main py-[10px] px-[15px] flex justify-start items-center gap-[25px]"
              >
                {item.icon}
                <div className="text-primaryText">
                  <h3 className="text-[1.1rem] lg:text-[1.25rem] font-semibold mb-[5px]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] lg:text-[12px] text-secondaryText font-light">
                    {item.content}
                  </p>
                </div>
              </AnimationOnScroll>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[50%]">
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            className="w-full h-auto lg:w-[450px] lg:h-[580px] relative py-0 pb-8 lg:pb-0 lg:py-[25px] border border-border-col"
          >
            <div className="relative z-10 left-0 lg:left-[-25px] mb-[20px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1670357526418-a6b4d6e707bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnV0Y2hlcnxlbnwwfDF8MHx8fDA%3D"
                alt="delicut"
                width={450}
                height={350}
                className="w-[100%] h-[300px] lg:h-[350px] object-cover"
              />
            </div>
            <ProgressBar />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
