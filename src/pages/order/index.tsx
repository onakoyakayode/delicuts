import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import Navbar from "@/layouts/Navbar";

import BuyerForm from "@/components/BuyerForm";
// import Slots from "@/components/Order/Slots";
import Layout from "@/components/Layout";
import Link from "next/link";

const Order = () => {
  const orderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (orderRef.current !== null) {
      const height = orderRef.current.clientHeight;
      console.log("Height:", height);
    }
  });
  return (
    <Layout>
      <div ref={orderRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-[70dvh] lg:h-[85dvh] flex flex-col justify-center items-center bg-background-fill py-[40px] lg:py-[80px] px-[30px] lg:px-[200px]">
            <div className="flex flex-col items-center text-primaryText">
              <h1 className="text-[1.3rem] text-center lg:text-[2rem] animate__animated animate__backInLeft animate__delay-1s mb-[70px] lg:mb-[100px]">
                Decision Time: Slot or Kilogram?
              </h1>
              <div className="flex flex-row justify-center items-start gap-4 lg:gap-10">
                <Link
                  href="/order/slot"
                  className="h-[130px] lg:h-[300px] w-[130px] lg:w-[300px] bg-secondary-bg rounded-xl text-primaryText flex justify-center items-center animate__animated animate__backInLeft animate__delay-2s"
                >
                  <h3 className="text-[1.6rem] lg:text-[2rem]">Slot</h3>
                </Link>
                <Link
                  href="/order/kilogram"
                  className="h-[130px] lg:h-[300px] w-[130px] lg:w-[300px] bg-primaryText rounded-xl text-[#bf0514] flex justify-center items-center animate__animated animate__backInRight animate__delay-2s"
                >
                  <h3 className="text-[1.6rem] lg:text-[2rem]">Kg</h3>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Order;
