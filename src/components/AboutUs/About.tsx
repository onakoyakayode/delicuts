import Image from "next/image";
import React from "react";
import beef from "../../assets/icons/beef.png";
import Turkey from "../../assets/icons/turkey.png";
import Lamb from "../../assets/icons/lamb.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsHeartPulse } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div className="bg-background-fill px-[20px] lg:px-[200px] w-[100%] hidden flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center py-[50px] lg:py-[100px]">
      <AnimationOnScroll
        animateIn="animate__slideInLeft"
        className="flex items-start justify-normal w-full lg:w-[50%]"
      >
        <div className="flex justify-normal items-end">
          <div className="flex flex-col items-start gap-4 z-20">
            <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-5 h-[100px] w-[250px]">
              <Image
                src={beef}
                alt="beef-delicuts"
                className="w-[50px] h-[50px] object-cover"
              />
              <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                <h3 className="text-[20px] leading-[120%] font-semibold ">
                  Beef Meat
                </h3>
                <p className="text-[13px]">Indulge in the Finest Beef</p>
              </div>
            </div>
            <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-5 h-[100px] w-[250px]">
              <Image
                src={Lamb}
                alt="turkey-delicuts"
                className="w-[50px] h-[50px] object-cover"
              />
              <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                <h3 className="text-[20px] leading-[120%] font-semibold">
                  Lamb Meat
                </h3>
                <p className="text-[13px]">
                  Savor the Exquisite Flavor of Lamb
                </p>
              </div>
            </div>
            <div className="py-[15px] px-3 flex justify-center items-start bg-background-main gap-5 h-[100px] w-[250px]">
              <Image
                src={Turkey}
                alt="turkey-delicuts"
                className="w-[50px] h-[50px] object-cover"
              />
              <div className="flex flex-col items-start gap-2  text-secondaryText font-Lato">
                <h3 className="text-[20px] leading-[120%] font-semibold ">
                  Turkey Meat
                </h3>
                <p className="text-[13px]">Experience the Delight of Turkey</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[100%] lg:w-[275px] lg:h-[400px] border border-border-col z-0 relative left-[-40px]">
            <Image
              src="https://images.unsplash.com/photo-1597398230884-35763d59ed15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
              alt="delicuts"
              className="w-[100%] h-[100%] z-10 absolute left-[-35px] top-[25px]"
              width={275}
              height={400}
            />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInRight">
        <div className="text-[#fff]">
          <h6 className="text-[11px] mb-[20px] uppercase text-border-col font-semibold leading-tight tracking-[2px]">
            About Delicuts
          </h6>
          <h2 className="text-[2.4rem] mb-[20px] leading-[100%] font-semibold w-[70%] text-primaryText capitalize">
            Beautiful, Fresh cuts everyday
          </h2>
          <p className="text-[13px] leading-tight text-secondaryText mb-[20px]">
            Our premium meat is a delicious and health-conscious choice that
            promises both flavor and nourishment. Tender, packed with essential
            nutrients, meat offers a wholesome alternative for your dining
            pleasure.
          </p>
          <div className="flex justify-start items-start text-primaryText gap-[30px]">
            <div className="flex justify-start items-start gap-[25px]">
              <HiOutlineLightBulb className="text-[#BF0514] h-[100px] w-[100px] scale-150" />
              <div>
                <h4 className="text-[20px] font-semibold mb-[5px]">
                  Our Vision
                </h4>
                <p className="text-[12px] font-normal">
                  We aims to be the top choice for exceptional, ethically
                  sourced meats, delivering unparalleled quality and taste to
                  redefine the industry.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-[25px]">
              <BsHeartPulse className="text-[#BF0514] h-[100px] w-[100px] scale-150" />
              <div>
                <h4 className="text-[20px] font-semibold mb-[5px]">
                  Our Mission
                </h4>
                <p className="text-[12px] font-normal">
                  Redefining meat excellence with premium, ethical sourcing for
                  a delectable, sustainable dining experience.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-primaryText text-[18px] font-medium mb-[0px]">
              Mustapha Adeoye
            </h3>
            <h6 className="text-border-col text-[10px] uppercase font-bold tracking-wider">
              Delicut Owner
            </h6>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default About;
