import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../assets/images/delicuts.png";
import links from "../../../public/data/links.json";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const DownNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isOrderPage =
    router.pathname === "/order" ||
    router.pathname === "/order/slot" ||
    router.pathname === "/order/kilogram";

  const handleRouter = () => {
    router.push("/Order");
  };
  return (
    <>
      <div className="hidden px-[200px] h-[70px] lg:flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="delicuts"
            className="w-[70px] h-[70px] object-cover"
          />
        </Link>
        <ul className="flex justify-normal items-center gap-7 text-[#d1c5c5] text-[14px]">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="hover:scale-110 transition-all duration-150"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div>
          {!isOrderPage && (
            <button
              onClick={handleRouter}
              className="h-[40px] px-[30px] text-[12px] tracking-widest uppercase flex justify-center items-center bg-secondary-bg text-primaryText"
            >
              Order Online
            </button>
          )}
        </div>
      </div>
      {/* Mobile View */}
      <div className="px-[10px] h-[50px] w-full lg:hidden flex flex-col justify-start items-start relative">
        <Link href="/">
          <Image
            src={Logo}
            alt="delicuts"
            className="w-[50px] h-[50px] object-cover"
          />
        </Link>
        <IoMdMenu
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="text-primaryText absolute right-3 top-2 w-[30px] h-[30px] cursor-pointer z-40"
        />
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="flex flex-col justify-normal items-center gap-2 text-[#d1c5c5] text-[14px] h-[70dvh] pt-[2%] bg-background-main absolute left-0 top-[50px] z-20 w-full"
        >
          {links.map((link, idx) => (
            <li
              key={idx}
              className="hover:scale-110 transition-all duration-150 list-none py-[8%] text-[16px]"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
          <div>
            {!isOrderPage && (
              <button
                onClick={handleRouter}
                className="h-[40px] px-[30px] text-[12px] mt-[5%] tracking-widest uppercase flex justify-center items-center bg-secondary-bg text-primaryText"
              >
                Order Online
              </button>
            )}
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default DownNavbar;
