import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Discover from "@/components/Discover";
import Feedback from "@/components/Feedback";
import ItemList from "@/components/ItemList";
import Layout from "@/components/Layout";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import ShopExperience from "@/components/ShopExperience";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/layouts/Footer";
import Hero from "@/layouts/Hero";
import Navbar from "@/layouts/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Partners />
      <ItemList />
      <ShopExperience />
      <WhyChooseUs />
      <Discover />
      <Products />
      <Feedback />
      <Blogs />
    </Layout>
  );
};

export default HomePage;
