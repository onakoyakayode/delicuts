import React from "react";
import styles from "../styles/style.module.css";
import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      img: "/icons/chicken-wings.png",
      title: "Spicy Wings",
    },
    {
      img: "/icons/beef.png",
      title: "Beef Corner",
    },
    {
      img: "/icons/steak.png",
      title: "Good Steak",
    },
    {
      img: "/icons/butcher.png",
      title: "King Butcher",
    },
    {
      img: "/icons/lamb.png",
      title: "Adiz Suya",
    },
  ];

  return (
    <div className="h-[20dvh] w-[100%] hidden flex-wrap justify-start lg:flex lg:justify-center lg:items-center bg-background-main">
      <ul
        className={`${styles.partnerContainer} flex justify-start lg:justify-center items-center px-[30px] lg:px-[200px]`}
      >
        {partners.map((partner, idx) => (
          <li
            key={idx}
            className={`${styles.partnerCard} flex justify-start lg:justify-center items-center`}
          >
            <Image
              src={partner.img}
              alt={partner.title}
              width={60}
              height={60}
              className="w-[30px] h-[30px]"
            />
            <p className="text-[0.9rem] lg:text-[1.4rem] leading-[1.3rem] tracking-widest text-[#d9a273] w-full lg:w-[40%] uppercase font-bold ">
              {partner.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
