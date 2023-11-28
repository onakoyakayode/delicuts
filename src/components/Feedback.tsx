import React, { useState, useEffect } from "react";
import { LuQuote } from "react-icons/lu";
import styles from "../styles/style.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Feedback = () => {
  const elementsData = [
    {
      text: "Absolutely blown away by the quality of DeliCuts meat! The steaks were so tender and flavorful. It's clear that they prioritize top-notch cuts. My family and I enjoyed a fantastic dinner, and we'll definitely be back for more!",
      name: "John S.",
    },
    {
      text: "Delicious meats and excellent service! The variety they offer is impressive, and everything is so fresh. I particularly loved the chicken—juicy and full of flavor. DeliCuts has become my go-to for premium meats.",
      name: "Emily H.",
    },
    {
      text: "Great experience at DeliCuts! The staff was knowledgeable and helped me choose the perfect cuts for a barbecue. The taste was outstanding, and the pricing was reasonable for the quality. Highly recommend!",
      name: "David M.",
    },
    {
      text: "I've tried several butcher shops, but DeliCuts stands out for its commitment to quality. The lamb chops were exceptional—tender, succulent, and perfectly seasoned. It's evident they take pride in their selection. Can't wait to try more!",
      name: "Sarah B.",
    },
    {
      text: "Impressed with the attention to detail at DeliCuts. The meat is clearly sourced with care, and you can taste the difference. The online ordering process was smooth, and my order arrived on time and well-packaged. A reliable choice for premium meats.",
      name: "Michael L.",
    },
  ];

  const [elements, setElements] = useState(elementsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Switch to the next set of elements every 5 seconds
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 7000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div
      className={`${styles.feedback} text-primaryText py-[50px] lg:py-[100px] px-[30px] lg:px-[300px] flex justify-center items-center`}
    >
      <AnimationOnScroll
        animatePreScroll={true}
        animateIn="animate__slideInLeft"
        className="flex flex-col items-center justify-center"
      >
        <LuQuote className="text-[3rem] lg:text-[5rem] mb-[20px] lg:mb-[30px] text-border-col" />
        <h2 className=" text-center text-secondaryText text-[0.9rem] lg:text-[0.95rem] mb-[20px]">
          {elements[index].text}
        </h2>
        <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold">
          {elements[index].name}
        </h1>
      </AnimationOnScroll>
    </div>
  );
};

export default Feedback;
