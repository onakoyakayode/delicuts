import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  selectItemsStatus,
  selectItemsError,
} from "@/features/items/itemsSlice";
import { AppDispatch } from "@/store";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(selectItems);
  const status = useSelector(selectItemsStatus);
  const error = useSelector(selectItemsError);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const idsToExclude = [1, 5, 8, 9, 4];

  const filteredItems = items.filter((item) => !idsToExclude.includes(item.id));

  if (status === "loading") {
    return <div>Loading....</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-auto w-full bg-background-fill px-[30px] lg:px-[200px] py-[50px] lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-[40px]">
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          className="w-full lg:w-[50%]"
        >
          <h3 className="text-border-col text-[11px] lg:text-[13px] mb-[7px] lg:mb-[10px] uppercase tracking-wider font-bold">
            Best seller product
          </h3>
          <h1 className="text-primaryText text-[1.8rem] lg:text-[2.5rem] mb-[10px] font-medium tracking-wider">
            Best Selling Meat
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInRight"
          className="text-[14px] text-secondaryText w-full lg:w-[50%]"
        >
          At Delicuts Meats, we take pride in providing you with the finest
          selection of meats that meet the highest standards of quality and
          taste. Our commitment to excellence is reflected in every cut,
          ensuring that you experience the best with every bite.
        </AnimationOnScroll>
      </div>
      <ul className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full">
        {filteredItems.map((product) => (
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            className="flex flex-col justify-center items-center w-full mb-[20px] lg:mb-0"
            key={product.id}
          >
            <div className="w-full lg:w-[200px] h-[200px] lg:h-[250px] relative border border-border-col mb-[40px]">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-[100%] h-[100%] object-cover relative top-[15px] lg:top-[25px] left-[-10px] lg:left-[-20px]"
              />
            </div>
            <div>
              <h2 className="text-secondaryText text-[17px] lg:text-[19px] font-medium tracking-wider">
                {product.name}
              </h2>
              <p className="text-border-col font-medium text-[16px] lg:text-[18px]">
                ₦ {product.pricePerKg} / kg
              </p>
            </div>
          </AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
};

export default Products;
