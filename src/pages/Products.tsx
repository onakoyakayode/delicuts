import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/layouts/Navbar";
import styles from "../styles/style.module.css";
import ItemList from "@/components/ItemList";
import ShopExperience from "@/components/ShopExperience";
import ProductList from "@/components/ProductList";
import Layout from "@/components/Layout";

const Products = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <div
            className={`${styles.products} h-[30dvh] lg:h-[50dvh] w-full px-[30px] lg:px-[200px] flex justify-center items-center`}
          >
            <h1 className="text-[2rem] lg:text-[2.7rem] text-primaryText font-semibold tracking-wider animate__animated animate__backInLeft animate__delay-1s">
              Our Product
            </h1>
          </div>
          <ItemList />
          <ShopExperience />
          <ProductList />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Products;
