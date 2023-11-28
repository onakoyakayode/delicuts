import Navbar from "@/layouts/Navbar";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styles from "../styles/style.module.css";
// import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import About from "@/components/AboutUs/About";
import Butcher from "@/components/AboutUs/Butcher";
import Footer from "@/layouts/Footer";
import Contact from "@/components/AboutUs/Contact";
import Layout from "@/components/Layout";

const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutRef.current !== null) {
      const height = aboutRef.current.clientHeight;
      console.log("Height:", height);
    }
  }, []);
  return (
    <Layout>
      <div ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="">
            <div
              className={`${styles.aboutUs} h-[30dvh] lg:h-[50dvh] w-[100%] flex justify-center items-center`}
            >
              <h1 className="text-[1.8rem] lg:text-[2.7rem] text-primaryText font-semibold tracking-wider animate__animated animate__backInLeft animate__delay-1s">
                About Delicuts Meats
              </h1>
            </div>
            <About />
            <Butcher />
            <Contact />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutUs;
