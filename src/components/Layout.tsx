import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/layouts/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "@/layouts/Footer";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Head>
        {/* Add your icon link or meta tags here */}
        <link rel="icon" href="/favicon.ico" />
        <title>Delicuts Meats</title>
      </Head>
      {/* Your icon or navigation bar or any other content that appears across pages */}
      <Navbar />
      <div className="top-[70px] lg:top-[120px] relative mb-[70px] lg:mb-[120px] w-full">
        {children}
      </div>
      <Link href="" className="fixed right-[3%] bottom-4 z-50">
        <IoLogoWhatsapp className="text-[#25D366] w-[40px] h-[40px] bg-primaryText rounded-full p-[1px] object-cover " />
      </Link>
      <Footer />
    </div>
  );
};

export default Layout;
