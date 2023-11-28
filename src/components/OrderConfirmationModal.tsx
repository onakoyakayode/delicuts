import React, { useState } from "react";
import { SelectedItem } from "./BuyerForm";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import axios from "axios";

interface OrderConfirmationModalProps {
  selectedItems: SelectedItem[];
  onClose: () => void;
  totalPrice: number;
  onFormSubmit: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  selectedItems,
  onClose,
  totalPrice,
  onFormSubmit,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.push("/");
  };

  const handleConfirmOrder = async () => {
    const data = {
      selectedItems: selectedItems,
      totalPrice: totalPrice,
    };
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(
          `Your order ${selectedItems}, has been sent. Thank you for your patronage`
        );
      } else {
        console.log("Failed to send order");
      }
    } catch (error) {
      console.error("Error sending order details:", error);
    }
  };

  return (
    <div className="fixed w-full h-[100dvh] z-20 top-0 left-0 flex justify-center items-center bg-[#0000008c] backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-primaryText w-full flex flex-col items-center py-[30px] px-[60px] rounded-lg relative">
          {!orderPlaced ? (
            <div className="flex flex-col items-center">
              <div
                className="absolute top-[15px] right-[20px] cursor-pointer"
                onClick={onClose}
              >
                &times;
              </div>
              <h2 className="text-[1.5rem] font-semibold mb-[20px]">
                Order Confirmation
              </h2>
              <ul className="">
                {selectedItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start mb-[10px] gap-5 text-[17px] font-normal leading-tight"
                  >
                    <p>{index + 1}.</p>
                    <h4 className="">
                      {item.quantity}
                      {item.unit}
                    </h4>
                    of
                    <h4 className="w-[100px]">{item.name}</h4> -{" "}
                    <h4 className="w-[100px] text-end">₦{item.price} </h4>{" "}
                  </li>
                ))}
              </ul>
              <h3 className="self-end border-t border-black w-full text-right pt-[5px] text-[18px] font-semibold mb-[20px]">
                Total: ₦{totalPrice}
              </h3>
              <div className="flex items-center gap-[20px]">
                <button
                  onClick={onClose}
                  className="bg-secondary-bg text-primaryText text-[14px] py-[5px] px-[20px] rounded-[4px] opacity-80 hover:opacity-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onFormSubmit(), setOrderPlaced(true), handleConfirmOrder;
                  }}
                  className=" bg-background-fill text-primaryText text-[14px] py-[5px] px-[20px] rounded-[4px] opacity-80 hover:opacity-100"
                >
                  Confirm
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="mb-[20px] text-[1.3rem] font-semibold">
                Order placed successfully!
              </p>
              <button
                onClick={handleClose}
                className=" bg-background-fill text-primaryText text-[14px] py-[5px] px-[20px] rounded-[4px] opacity-80 hover:opacity-100"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationModal;
