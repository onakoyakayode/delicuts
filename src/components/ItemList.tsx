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
import Link from "next/link";
import Image from "next/image";

const ItemList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(selectItems);
  const status = useSelector(selectItemsStatus);
  const error = useSelector(selectItemsError);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-background-fill py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          animateOut="animate__slideInRigh"
          className="flex flex-col justify-center items-center"
        >
          <h2 className="text-border-col uppercase text-[11px] lg:text-[12px] mb-[10px] font-semibold font-Lato">
            Our Product
          </h2>
          <h2 className="t text-primaryText text-[2rem] lg:text-[2.5rem] leading-normal font-semibold mb-[20px]">
            Nice to Meat You
          </h2>
          <p className="t text-primaryText text-center text-[0.85rem] lg:text-[.9rem] w-full lg:w-[70%] mb-[30px] lg:mb-[40px]">
            Unleash your culinary creativity with the freshest canvas of
            flavors. Elevate your meals with our premium selection of raw meats
            - because every masterpiece starts with quality ingredients.
          </p>
        </AnimationOnScroll>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {items.map((item) => (
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              key={item.id}
              className="w-full lg:w-[300px] h-auto lg:h-[250px] border border-border-col rounded-sm p-[15px] lg:p-[25px] text-secondaryText flex flex-col items-start justify-start"
            >
              <Image
                width={50}
                height={50}
                src={item.icon}
                alt={item.image}
                className="w-[50px] h-[50px] object-cover mb-[15px] lg:mb-[20px]"
              />
              <h3 className="text-[0.9rem] lg:text-[1.2rem] leading-normal mb-[10px] lg:mb-[15px] capitalize tracking-[1px] font-Lato font-medium ">
                {item.name}
              </h3>
              <p className="text-[12px] lg:text-[13px] font-light text-secondaryText leading-[14px] h-[6rem] lg:h-[100px] font-Lato">
                {item.content}
              </p>
              <Link
                href="/"
                className="text-[#bf0514] text-[12px] font-medium font-Lato opacity-90 hover:opacity-100 hover:underline"
              >
                Read More
              </Link>
            </AnimationOnScroll>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
