import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from "@/features/Products/productsSlice";
import { AppDispatch } from "@/store";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Discover from "./Discover";
import Products from "./Products";
import Footer from "@/layouts/Footer";
import Image from "next/image";
// import CowMeat from "./Products/CowMeat";

const ProductList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const goatMeats =
    products.length > 0 ? products[0]?.meatCuts?.goat?.cuts : [];

  const ramMeats = products[0]?.meatCuts?.ram?.cuts ?? [];

  const cowMeats = products[0]?.meatCuts?.cow?.cuts ?? [];

  const cowRib = cowMeats.find((cut) => cut.name === "Cow Rib");
  const ramLap = ramMeats.find((cut) => cut.name === "Ram Lap");
  const ramPrice = ramMeats.find((cut) => cut.name === "Ram Lap");
  const goatLap = goatMeats?.find((cut) => cut.name === "Goat Lap");

  console.log(ramPrice);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" bg-background-fill w-full">
      <div className="px-[30px] lg:px-[200px] py-[50px] lg:py-[100px]">
        {/* Cow Meat */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-[100px]">
          <div className="text-border-col w-full lg:w-[50%]">
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              className="w-[100%]"
            >
              <div>
                <h4 className="text-[11px] lg:text-[12px] uppercase font-semibold tracking-wider mb-[20px]">
                  Product List
                </h4>
                <h1 className="text-[2rem] lg:text-[2.4rem] text-primaryText font-semibold tracking-wide mb-[15px]">
                  Beef Meat
                </h1>
                <p className="text-secondaryText text-[13px] lg:text-[14px] leading-normal mb-[20px]">
                  From farm to table, savor the excellence in every bite.
                </p>
                <div>
                  <ul className="">
                    {cowMeats.map((cow, idx) => (
                      <AnimationOnScroll
                        key={idx}
                        animateIn="animate__slideInLeft"
                        className="mb-[15px]"
                      >
                        <li className="flex justify-start items-baseline gap-2 lg:gap-[10px] w-full">
                          <p className="w-full lg:w-[230px] text-primaryText font-semibold text-[1rem] lg:text-[1.2rem]">
                            {cow.name}
                          </p>
                          <div className="w-[60%] lg:w-[80%] h-[1px] border-b-2 border-orange-900 border-dashed "></div>
                          <h3 className="w-[100%] lg:w-[250px] text-[1.1rem] lg:text-[1.3rem] font-medium">
                            {" "}
                            {/* ₦ {cow.pricePerKg} / Kg */}
                            {cow.pricePerKg
                              ? ` ₦ ${cow.pricePerKg} / Kg`
                              : `₦ ${cow.price}`}
                          </h3>
                        </li>
                        <h4 className="text-secondaryText text-[12px] font-medium">
                          {cow.content}
                        </h4>
                      </AnimationOnScroll>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="w-full lg:w-[45%]">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              className="w-[100%] border border-border-col h-[450px] lg:h-[650px] grid grid-cols-1 relative"
            >
              {cowRib && (
                <AnimationOnScroll
                  animateIn="animate__slideInRight"
                  key={cowRib.name}
                  className="grid grid-cols-2 gap-4 relative left-[-15px] lg:left-[-25px] top-[15px] lg:top-[25px]"
                >
                  <div className="col-span-1 h-[250px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={cowRib.images[0]}
                      alt="First"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 h-[250px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={cowRib.images[1]}
                      alt="Second"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 h-[250px] lg:h-[350px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={cowRib.images[2]}
                      alt="Third"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                </AnimationOnScroll>
              )}
            </AnimationOnScroll>
          </div>
        </div>
        {/* Ram Meat */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-[100px]">
          <div className="w-full lg;w-[45%]">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              className="w-[100%] border border-border-col h-[450px] lg:h-[650px] grid grid-cols-1 relative"
            >
              {ramLap && (
                <AnimationOnScroll
                  animateIn="animate__slideInLeft"
                  key={ramLap.name}
                  className="grid grid-cols-2 gap-4 relative left-[-15px] lg:left-[-25px] top-[15px] lg:top-[25px]"
                >
                  <div className="col-span-1 h-[200px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={ramLap.images[0]}
                      alt="First"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 h-[200px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={ramLap.images[1]}
                      alt="Second"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 h-[250px] lg:h-[350px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={ramLap.images[2]}
                      alt="Third"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                </AnimationOnScroll>
              )}
            </AnimationOnScroll>
          </div>
          <div className="text-border-col w-full lg:w-[50%]">
            <div className="w-[100%] mt-[60px] lg:mt-0">
              <AnimationOnScroll animateIn="animate__slideInRight">
                <h4 className="text-[12px] uppercase font-semibold tracking-wider mb-[20px]">
                  Product List
                </h4>
                <h1 className="text-[2rem] lg:text-[2.4rem] text-primaryText font-semibold tracking-wide mb-[15px]">
                  Ram Meat
                </h1>
                <p className="text-secondaryText text-[13px] lg:text-[14px] leading-normal mb-[20px]">
                  From farm to table, savor the excellence in every bite.
                </p>
                <div>
                  <ul className="">
                    {ramMeats.map((ram, idx) => (
                      <AnimationOnScroll
                        animateIn="animate__slideInRight"
                        className="mb-[15px]"
                        key={idx}
                      >
                        <li className="flex justify-start items-baseline gap-2 lg:gap-[10px] w-full">
                          <p className="w-[100%] lg:w-[230px] text-primaryText font-semibold text-[1rem] lg:text-[1.2rem]">
                            {ram.name}
                          </p>
                          <div className="w-[100%] lg:w-[80%] h-[1px] border-b-2 border-orange-900 border-dashed "></div>
                          <h3 className="w-full lg:w-[250px] text-[1.1rem] lg:text-[1.3rem] font-medium">
                            {" "}
                            {/* ₦ {ram.pricePerKg} / Kg */}
                            {ram.pricePerKg
                              ? ` ₦ ${ram.pricePerKg} / Kg`
                              : `₦ ${ram.price}`}
                          </h3>
                        </li>
                        <h4 className="text-secondaryText text-[12px] font-medium">
                          {ram.content}
                        </h4>
                      </AnimationOnScroll>
                    ))}
                  </ul>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        {/* Goat Meat */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mb-[100px]">
          <div className="text-border-col w-full lg:w-[50%]">
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              className="w-[100%]"
            >
              <div>
                <h4 className="text-[12px] uppercase font-semibold tracking-wider mb-[20px]">
                  Product List
                </h4>
                <h1 className="text-[2rem] lg:text-[2.4rem] text-primaryText font-semibold tracking-wide mb-[15px]">
                  Goat Meat
                </h1>
                <p className="text-secondaryText text-[13px] lg:text-[14px] leading-normal mb-[20px]">
                  From farm to table, savor the excellence in every bite.
                </p>
                <div>
                  <ul className="">
                    {goatMeats?.map((goat, idx) => (
                      <AnimationOnScroll
                        animateIn="animate__slideInLeft"
                        className="mb-[15px]"
                        key={idx}
                      >
                        <li
                          key={idx}
                          className="flex justify-start items-baseline gap-[10px] w-full"
                        >
                          <p className="w-full lg:w-[230px] text-primaryText font-semibold text-[1rem] lg:text-[1.2rem]">
                            {goat.name}
                          </p>
                          <div className="w-[80%] h-[1px] border-b-2 border-orange-900 border-dashed "></div>
                          <h3 className="w-full lg:w-[250px] text-[1.1rem] lg:text-[1.3rem] font-medium">
                            {" "}
                            {/* ₦ {cow.pricePerKg} / Kg */}
                            {goat.pricePerKg
                              ? ` ₦ ${goat.pricePerKg} / Kg`
                              : `₦ ${goat.price}`}
                          </h3>
                        </li>
                        <h4 className="text-secondaryText text-[12px] font-medium">
                          {goat.content}
                        </h4>
                      </AnimationOnScroll>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="w-full lg:w-[45%]">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              className="w-[100%] border border-border-col h-[450px] lg:h-[650px] grid grid-cols-1 relative"
            >
              {goatLap && (
                <AnimationOnScroll
                  animateIn="animate__slideInRight"
                  key={goatLap.name}
                  className="grid grid-cols-2 gap-4 relative left-[-25px] top-[25px]"
                >
                  <div className="col-span-1 h-[200px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={goatLap.images[0]}
                      alt="First"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 h-[200px] lg:h-[300px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={goatLap.images[1]}
                      alt="Second"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 h-[250px] lg:h-[350px] w-full">
                    <Image
                      width={100}
                      height={100}
                      src={goatLap.images[2]}
                      alt="Third"
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                </AnimationOnScroll>
              )}
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <Discover />
      <Products />
    </div>
  );
};

export default ProductList;
