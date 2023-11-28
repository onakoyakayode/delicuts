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

const OurProducts: React.FC = () => {
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
    <div className="h-auto w-full bg-background-fill px-[200px] py-[100px]">
      <div className="flex justify-between items-center w-full mb-[40px]">
        <AnimationOnScroll animateIn="animate__slideInLeft" className="w-[50%]">
          <h3 className="text-border-col text-[13px] mb-[10px] uppercase tracking-wider font-bold">
            Best seller product
          </h3>
          <h1 className="text-primaryText text-[2.5rem] font-medium tracking-wider">
            Best Selling Meat
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInRight"
          className="text-[14px] text-secondaryText w-[50%]"
        >
          At Delicuts Meats, we take pride in providing you with the finest
          selection of meats that meet the highest standards of quality and
          taste. Our commitment to excellence is reflected in every cut,
          ensuring that you experience the best with every bite.
        </AnimationOnScroll>
      </div>
      <ul className="flex flex-wrap justify-between items-start">
        {filteredItems.map((product) => (
          <AnimationOnScroll
            key={product.id}
            animateIn="animate__slideInRight"
            className="flex flex-col justify-center items-center"
          >
            <div className="w-[200px] h-[250px] relative border border-border-col mb-[40px]">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-[100%] h-[100%] object-cover relative top-[25px] left-[-20px]"
              />
            </div>
            <div>
              <h2 className="text-secondaryText text-[19px] font-medium tracking-wider">
                {product.name}
              </h2>
              <p className="text-border-col font-medium text-[18px]">
                ₦ {product.pricePerKg} / kg
              </p>
            </div>
          </AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
};

export default OurProducts;
