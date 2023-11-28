import Image from "next/image";
import React from "react";
import beef from "../assets/icons/beef.png";
import Turkey from "../assets/icons/turkey.png";
import Lamb from "../assets/icons/lamb.png";
import styles from "../styles/style.module.css";
import AboutMeat from "../assets/images/abtMeat.jpg";
import { CgEditBlackPoint } from "react-icons/cg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  const meatProps = [
    "100% Organic Meat",
    "High Quality Meat",
    "Experienced Butcher",
    "Using Clean Tools",
    "Safe Packaging",
    "Swift Shipping",
  ];

  return (
    <div className=" bg-background-fill px-[30px] lg:px-[200px] flex flex-col lg:flex-row justify-start lg:justify-center items-center py-[50px] lg:py-[100px]">
      <div className="flex items-center lg:items-start justify-center lg:justify-normal w-full">
        <AnimationOnScroll animateIn="animate__slideInLeft" className="w-full">
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex lg:justify-normal items-start lg:items-end w-full">
            <div className="flex flex-col items-start gap-2 lg:gap-4 z-20 w-full">
              <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-3 lg:gap-6 h-[75px] lg:h-[100px] w-full lg:w-[250px]">
                <Image
                  src={beef}
                  alt="beef-delicuts"
                  className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] object-cover"
                  priority
                />
                <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                  <h3 className="text-[17px] lg:text-[20px] leading-[120%] font-semibold ">
                    Beef Meat
                  </h3>
                  <p className="text-[12px] lg:text-[13px]">
                    Indulge in the Finest Beef
                  </p>
                </div>
              </div>
              <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-3 lg:gap-6 h-[75px] lg:h-[100px] w-full lg:w-[250px]">
                <Image
                  src={Lamb}
                  alt="turkey-delicuts"
                  width={30}
                  height={30}
                  className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] object-cover"
                  priority
                />
                <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                  <h3 className="text-[17px] lg:text-[20px] leading-[120%] font-semibold">
                    Lamb Meat
                  </h3>
                  <p className="text-[12px] lg:text-[13px]">
                    Savor the Exquisite Flavor of Lamb
                  </p>
                </div>
              </div>
              <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-3 lg:gap-6 h-[75px] lg:h-[100px] w-full lg:w-[250px]">
                <Image
                  src={Turkey}
                  alt="turkey-delicuts"
                  width={30}
                  height={30}
                  className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] object-cover"
                  priority
                />
                <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                  <h3 className="text-[17px] lg:text-[20px] leading-[120%] font-semibold ">
                    Turkey Meat
                  </h3>
                  <p className="text-[12px] lg:text-[13px]">
                    Experience the Delight of Turkey
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[275px] h-[300px] lg:h-[400px] lg:border lg:border-border-col z-0 relative left-0 lg:left-[-40px]">
              <Image
                src={AboutMeat}
                alt="delicuts"
                width={300}
                height={300}
                className="w-[100%] h-[100%] z-10 absolute lg:left-[-35px] lg:top-[25px]"
                priority
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateIn="animate__slideInRight"
        className="w-full mt-8 lg:mt-0"
      >
        <div className="text-[#fff]">
          <h6 className="text-[11px] lg:text-[12px] mb-[10px] lg:mb-[20px] uppercase text-border-col font-semibold leading-tight tracking-[2px]">
            About Delicuts
          </h6>
          <h2 className="text-[1.8rem] lg:text-[2.8rem] mb-[20px] text-left leading-[100%] font-semibold w-full lg:w-[80%] text-primaryText capitalize">
            Beautiful, Fresh cuts everyday
          </h2>
          <p className="text-[12px] lg:text-[13px] leading-tight text-secondaryText mb-[20px]">
            Our premium meat is a delicious and health-conscious choice that
            promises both flavor and nourishment. Tender, packed with essential
            nutrients, meat offers a wholesome alternative for your dining
            pleasure.
          </p>
          <ul className="columns-2 text-secondaryText text-[13px] lg:text-[14px] mb-[17px] lg:mb-[20px]">
            {meatProps.map((meat, idx) => (
              <div
                key={idx}
                className="flex justify-normal items-center gap-2 pb-[10px]"
              >
                <CgEditBlackPoint className="text-[#bf0514]" />
                <li key={idx}>{meat}</li>
              </div>
            ))}
          </ul>
          <button className="h-[40px] px-[30px] text-[10px] lg:text-[11px] font-medium tracking-widest uppercase flex justify-center items-center bg-secondary-bg text-primaryText">
            Read More
          </button>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default About;
