import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import {
  fetchMeats,
  selectMeatCuts,
  selectMeatCutsStatus,
  selectMeatCutsError,
} from "@/features/Meats/meatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { motion } from "framer-motion";
import Link from "next/link";

interface Meat {
  id: number;
  name: string;
  pricePerKg: number;
}

const Kilogram: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const meats: Meat[] = useSelector(selectMeatCuts);
  const status = useSelector(selectMeatCutsStatus);
  const error = useSelector(selectMeatCutsError);

  const initialSelectedKg: { [key: string]: number } = {
    cow: 0,
    ram: 0,
    goat: 0,
  };

  const [selectedKg, setSelectedKg] = useState(initialSelectedKg);
  const sendToWhatsApp = () => {
    const phoneNumber = "2348164501662";
    const message = `Hi Delicuts Meats, I just placed these orders:\n\n`;

    const orderDetails = meats.map((meat) => {
      const kg = selectedKg[meat.name.toLowerCase()];
      const totalPrice = meat.pricePerKg * (kg || 0);
      return `${kg} Kg of ${meat.name} - ₦${totalPrice}`;
    });

    const totalPrices = meats.reduce((total, meat) => {
      return (
        total + meat.pricePerKg * (selectedKg[meat.name.toLowerCase()] || 0)
      );
    }, 0);

    const totalOrder = `Total Price: ₦${totalPrices}`;

    const whatsappMessage = `${message}${orderDetails.join(
      "\n"
    )}\n\n${totalOrder}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url);
  };

  useEffect(() => {
    dispatch(fetchMeats());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error:{error}</div>;
  }

  const handleKgChange =
    (meatType: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedKg({ ...selectedKg, [meatType]: Number(event.target.value) });
    };

  const totalPrices = meats.reduce((total, meat) => {
    return total + meat.pricePerKg * (selectedKg[meat.name.toLowerCase()] || 0);
  }, 0);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-[85dvh] w-full flex items-center justify-center px-[20px] lg:px-[200px] py-[40px] lg:py-[80px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-between w-full mb-[20px]">
              <div></div>
              <h1 className="text-[1.3rem] lg:text-[1.5rem] font-semibold">
                Kilogram
              </h1>
              <Link
                href="/order/kilogram"
                className="text-[red] underline text-[0.8rem] lg:text-[0.9rem] "
              >
                Share Slot?
              </Link>
            </div>
            <ul className="flex flex-col items-center rounded-[10px] shadow-lg bg-primaryText max-w-full lg:max-w-[600px] w-full px-[10px] lg:px-[30px] py-[50px]">
              {meats.map((meat) => (
                <li
                  className="flex justify-start lg:justify-normal items-center gap-2 lg:gap-4 mb-[25px] border-b border-stone-200 w-full"
                  key={meat.id}
                >
                  <p className="w-full lg:w-[100px] text-center text-[13px] lg:text-[16px]">
                    {meat.name} is
                  </p>
                  <p className="w-full lg:w-[50px] text-[13px] lg:text-[16px]">
                    {meat.pricePerKg}/Kg
                  </p>
                  <select
                    onChange={handleKgChange(meat.name.toLowerCase())}
                    //   value={selectedKg[meat.name.toLowerCase()]}
                    defaultValue=""
                    className="w-full lg:w-[100px] ml-[3px] lg:ml-[15px] h-[35px] text-[13px] lg:text-[16px] rounded-[5px] focus:outline-1 text-center"
                  >
                    <option value="" disabled>
                      Select kg
                    </option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1} Kg
                      </option>
                    ))}
                  </select>
                  <p className="w-full lg:w-[200px] text-right text-[0.8rem] lg:text-[1.1rem] font-medium">
                    Price: ₦
                    {meat.pricePerKg * selectedKg[meat.name.toLowerCase()] || 0}
                  </p>
                </li>
              ))}
              <p className="text-[1.2rem] lg:text-[1.5rem] font-bold self-end border-b border-stone-300 pt-[10px] w-full text-right">
                Total Price: ₦{totalPrices}
              </p>
            </ul>
            <button
              className="text-[1.1rem] bg-background-fill text-white px-5 py-4 rounded-lg mt-8 opacity-80 hover:opacity-100"
              onClick={sendToWhatsApp}
            >
              Place Order
            </button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Kilogram;
