import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMeats,
  selectMeatCuts,
  selectMeatCutsStatus,
  selectMeatCutsError,
} from "../../../features/Meats/meatSlice";
import { AppDispatch } from "@/store";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

interface Slot {
  [slotType: string]: number;
}

const Slot: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const meats = useSelector(selectMeatCuts);
  const error = useSelector(selectMeatCutsError);
  const status = useSelector(selectMeatCutsStatus);
  const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: number }>(
    { cow: 0, ram: 0, goat: 0 }
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");
  let slots: Slot[] = [];

  useEffect(() => {
    dispatch(fetchMeats());
  }, [dispatch]);

  const getTotalPrice = useCallback(() => {
    let totalPrice = 0;
    for (const meatType in selectedSlots) {
      totalPrice += selectedSlots[meatType];
    }
    return totalPrice;
  }, [selectedSlots]);

  useEffect(() => {
    const messageContent = Object.entries(selectedSlots)
      .map(([meatType, selectedSlot]) => {
        return `Slot for ${meatType}: ₦${selectedSlot}`;
      })
      .join("\n");

    const totalCost = getTotalPrice();
    const totalMessage = `Total Cost: ₦${totalCost}`;

    const message = `${messageContent}\n${totalMessage}`;
    setWhatsappMessage(message);
  }, [selectedSlots, getTotalPrice]);

  if (status === "loading") {
    return <div>Loading.....</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleSlotChange =
    (meatType: string) =>
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      setSelectedSlots({
        ...selectedSlots,
        [meatType]: +event.target.value,
      });
    };

  const sendToWhatsApp = () => {
    const orderMessage = "Hi Delicuts Meats, I just placed these orders:";
    const message = encodeURIComponent(`${orderMessage}\n${whatsappMessage}`);
    const phoneNumber = "2348063707473"; // Replace this with the recipient's phone number

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-black flex items-center justify-center bg-white py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] w-full">
          <div className="max-w-[100%] lg:max-w-[70%] flex flex-col items-center w-full rounded-xl shadow-lg py-[50px] px-[20px] lg:px-[50px]">
            <div className="flex items-center justify-between w-full mb-[25px]">
              <div></div>
              <h1 className="text-[1.3rem] lg:text-[1.5rem] font-semibold">
                Slots
              </h1>
              <Link
                href="/order/kilogram"
                className="text-[red] underline text-[0.7rem] lg:text-[0.9rem] "
              >
                Buy in Kg?
              </Link>
            </div>
            {Object.entries(selectedSlots).map(
              ([meatType, selectedSlot], index) => {
                const meat = meats.find(
                  (meat) =>
                    meat.name ===
                    `${meatType.charAt(0).toUpperCase()}${meatType.slice(
                      1
                    )} Meat`
                );

                if (meat && Array.isArray(meat.slots)) {
                  slots = meat.slots; // Ensure meat.slots is an array of Slot objects
                } else {
                  // Handle other cases or provide a default value for slots
                  slots = [{ defaultSlot: 0 }, { anotherDefaultSlot: 0 }];
                }
                return (
                  <div
                    key={index}
                    className="flex justify-start lg:justify-between items-center mb-[20px] py-[5px] border-b border-stone-400"
                  >
                    <h2 className="capitalize mr-1 lg:mr-5 text-[1rem] lg:text-[1.2rem] w-[50%] lg:w-[100px] text-left lg:text-center">
                      {meatType}
                    </h2>
                    <select
                      value={selectedSlot}
                      onChange={handleSlotChange(meatType)}
                      className="w-[90%] lg:w-[170px] text-left h-[40px] pl-[5px] rounded-[5px] text-[13px] lg:text-[15px] border border-stone-500 hover:border-b-gray-500 focus:outline-none"
                    >
                      <option value="">Select a slot</option>

                      {Array.isArray(slots) &&
                        slots.map((slot: Slot, slotIndex: number) => (
                          <optgroup
                            label={`Slot ${slotIndex + 1}`}
                            key={slotIndex}
                          >
                            {Object.entries(slot).map(([slotType, price]) => (
                              <option key={slotType} value={price}>
                                {slotType}: ₦{price}
                              </option>
                            ))}
                          </optgroup>
                        ))}

                      {meat?.name === "Cow Meat" && meat.specialRequest && (
                        <optgroup label="Special Request">
                          {Object.entries(meat.specialRequest[0]).map(
                            ([requestType, price]) => (
                              <option key={requestType} value={price}>
                                {requestType}: ₦{price}
                              </option>
                            )
                          )}
                        </optgroup>
                      )}
                    </select>
                    <p className="w-full lg:w-[300px] text-[14px] lg:text-[16px] text-right capitalize">
                      Price for {meatType} slot: ₦{selectedSlot}
                    </p>
                  </div>
                );
              }
            )}
            <p className="self-end font-bold text-[1rem] lg:text-[1.2rem] mr-0 lg:mr-5">
              Total Price: ₦{getTotalPrice()}
            </p>
            <button
              className="bg-background-fill text-white px-4 py-2 rounded-lg mt-8 opacity-80 hover:opacity-100"
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

export default Slot;
