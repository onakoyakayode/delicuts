import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailDownloadLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <div className="py-[50px] lg:py-[100px] px-[30px] lg:px-[200px] w-full bg-background-fill">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-[10%] w-full">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="w-full lg:w-[45%] text-primaryText"
        >
          <h5 className="text-border-col text-[12px] mb-[10px] uppercase tracking-wider font-bold">
            Contact Us
          </h5>
          <h2 className="text-primaryText text-[2rem] lg:text-[2.5rem] mb-[10px] font-semibold tracking-wider">
            Get in touch
          </h2>
          <p className="text-[13px] text-secondaryText mb-[25px]">
            We&apos;d love to hear from you. Whether you have inquiries about
            our premium cuts, want to place an order, or share your culinary
            experiences, our team is here to assist you. Reach out and
            let&apos;s create something delicious together!
          </p>
          <div className="flex justify-between items-start w-full lg:w-[80%] mb-[25px]">
            <div className="flex justify-start items-start gap-[10px] w-full">
              <FiPhoneCall className="text-border-col w-[25px] lg:w-[40px] h-[25px] lg:h-[40px]" />
              <div className="w-[100%] lg:w-[120px]">
                <h5 className="text-[17px] lg:text-[19px] leading-none font-medium">
                  Phone
                </h5>
                <Link
                  href="tel:09091929394"
                  className="text-[13px] lg:text-[14px] font-medium text-secondaryText"
                >
                  +234-90-91929394
                </Link>
              </div>
            </div>
            <div className="flex justify-start items-start gap-[10px]">
              <RiMailDownloadLine className="text-border-col w-[25px] lg:w-[40px] h-[25px] lg:h-[40px]" />
              <div className="w-full lg:w-[120px]">
                <h5 className="text-[17px] lg:text-[19px] leading-none font-medium">
                  Email
                </h5>
                <Link
                  href="mailto:mail@delicut.com"
                  className="text-[13px] lg:text-[14px] underline font-medium text-secondaryText"
                >
                  mail@delicut.com
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start w-full lg:w-[80%]">
            <div className="flex justify-start items-start gap-[10px] w-full">
              <ImWhatsapp className="text-border-col w-[25px] lg:w-[40px] h-[25px] lg:h-[40px]" />
              <div className="w-full lg:w-[120px]">
                <h5 className="text-[17px] lg:text-[19px] leading-none font-medium">
                  Whatsapp
                </h5>
                <Link
                  href="tel:09091929394"
                  className="text-[13px] lg:text-[14px] font-medium text-secondaryText w-full"
                >
                  +234-90-91929394
                </Link>
              </div>
            </div>
            <div className="flex justify-start items-start gap-[10px] w-full">
              <SlLocationPin className="text-border-col w-[25px] lg:w-[40px] h-[25px] lg:h-[40px]" />
              <div className="w-full lg:w-[120px]">
                <h5 className="text-[17px] lg:text-[19px] leading-none font-medium w-full">
                  Address
                </h5>
                <p className="text-[13px] lg:text-[14px] font-medium text-secondaryText w-full">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="text-primaryText mt-[40px]">
            <h2 className="text-[15px] lg:text-[18px] font-medium mb-[10px]">
              Follow Us On
            </h2>
            <ul className="flex justify-start items-center gap-3">
              <Link
                href="/"
                className="w-[25px] lg:w-[40px] h-[25px] lg:h-[40px] rounded-full bg-background-main p-[5px] lg:p-[10px] hover:translate-y-1 transition-all duration-150"
              >
                <FaFacebook className="text-primaryText w-[100%] h-[100%]" />
              </Link>
              <Link
                href="/"
                className="w-[25px] lg:w-[40px] h-[25px] lg:h-[40px] rounded-full bg-background-main p-[5px] lg:p-[10px] hover:translate-y-1 transition-all duration-150"
              >
                <FaTwitter className="text-primaryText w-[100%] h-[100%]" />
              </Link>
              <Link
                href="/"
                className="w-[25px] lg:w-[40px] h-[25px] lg:h-[40px] rounded-full bg-background-main p-[5px] lg:p-[10px] hover:translate-y-1 transition-all duration-150"
              >
                <FaInstagram className="text-primaryText w-[100%] h-[100%]" />
              </Link>
              <Link
                href="/"
                className="w-[25px] lg:w-[40px] h-[25px] lg:h-[40px] rounded-full bg-background-main p-[5px] lg:p-[10px] hover:translate-y-1 transition-all duration-150"
              >
                <FaYoutube className="text-primaryText w-[100%] h-[100%]" />
              </Link>
            </ul>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="text-primaryText mt-[40px] lg;mt-0 w-full lg:w-[45%] "
        >
          <h1 className="text-[18px] capitalize mb-[20px]">
            Send your message
          </h1>
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="h-[40px] w-full border border-secondaryText bg-background-fill p-[10px] text-[14px] mb-[25px] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="h-[40px] w-full border border-secondaryText bg-background-fill p-[10px] text-[14px] mb-[25px] focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="h-[40px] w-full border border-secondaryText bg-background-fill p-[10px] text-[14px] mb-[25px] focus:outline-none"
            />
            <textarea
              name="question"
              id=""
              placeholder="Question"
              className="p-[10px] h-[120px] w-full bg-background-fill focus:outline-none border border-secondaryText"
            ></textarea>
            <button
              type="submit"
              className="mt-[20px] text-[11px] font-semibold px-[20px] py-[10px] uppercase bg-secondary-bg"
            >
              Send Question
            </button>
          </form>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Contact;
