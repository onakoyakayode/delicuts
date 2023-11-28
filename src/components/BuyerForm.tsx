import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  setSelectedItems,
  selectSelectedItems,
  selectItemsError,
  selectItemsStatus,
} from "@/features/items/itemsSlice";
import { AppDispatch } from "@/store";
import OrderConfirmationModal from "./OrderConfirmationModal";

interface Item {
  id: number;
  name: string;
  pricePerKg: number;
  pricePerSlot: number;
  totalSlots: number;
  weight: number;
  icon: string;
  image: string;
  content: string;
}

export interface SelectedItem {
  name: string;
  unit: "kg" | "slots";
  quantity?: number;
  price: number;
  id: number;
}

const BuyerForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(selectItems);
  const itemsStatus = useSelector(selectItemsStatus);
  const itemsError = useSelector(selectItemsError);

  const [usePricePerKg, setUsePricePerKg] = useState(true);
  const [useKgInput, setUseKgInput] = useState(true);
  const [selectedKgs, setSelectedKgs] = useState<{ [key: number]: number }>({});
  const [selectedSlots, setSelectedSlots] = useState<{ [key: number]: number }>(
    {}
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemsData, setSelectedItemsData] = useState<SelectedItem[]>(
    []
  );

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedKgs({});
    setSelectedSlots({});
  };

  //   const handleConfirmOrder = () => {
  //     setShowModal(true);
  //   };

  const handleInputChange = (itemId: number, value: string | number) => {
    if (useKgInput) {
      handleKgChange(itemId, value);
    } else {
      handleSlotChange(itemId, value);
    }
  };

  const handleKgChange = (itemId: number, value: string | number) => {
    const kgValue = value === "" ? 0 : parseInt(value.toString());
    const item = items.find((item) => item.id === itemId);

    if (item) {
      if (kgValue > item.totalSlots) {
        setSelectedKgs({
          ...selectedKgs,
          [itemId]: item.totalSlots,
        });
      } else {
        const price =
          kgValue * (usePricePerKg ? item.pricePerKg : item.pricePerSlot);

        setSelectedKgs({
          ...selectedKgs,
          [itemId]: kgValue,
        });

        setTotalPrice((prevTotalPrice) => {
          const updatedTotalPrice =
            prevTotalPrice -
            (selectedKgs[itemId] || 0) *
              (usePricePerKg ? item.pricePerKg : item.pricePerSlot);
          return updatedTotalPrice + price;
        });
      }
    }
  };

  const handleSlotChange = (itemId: number, value: string | number) => {
    const slotValue = value === "" ? 0 : parseInt(value.toString());
    const item = items.find((item) => item.id === itemId);

    if (item) {
      if (slotValue > item.totalSlots) {
        setSelectedSlots({
          ...selectedSlots,
          [itemId]: item.totalSlots,
        });
      } else {
        const price =
          slotValue * (usePricePerKg ? item.pricePerKg : item.pricePerSlot);

        setSelectedSlots({
          ...selectedSlots,
          [itemId]: slotValue,
        });

        setTotalPrice((prevTotalPrice) => {
          const updatedTotalPrice =
            prevTotalPrice -
            (selectedSlots[itemId] || 0) *
              (usePricePerKg ? item.pricePerKg : item.pricePerSlot);
          return updatedTotalPrice + price;
        });
      }
    }
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (itemsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (itemsStatus === "failed") {
    return <div>Error: {itemsError}</div>;
  }

  const handleSubmit = () => {
    setShowModal(true);
    handleFormSubmit();
  };

  const handleFormSubmit = () => {
    const selectedItemsData: SelectedItem[] = [];
    const updatedSelectedItemsData: SelectedItem[] = [];
    setSelectedItemsData(updatedSelectedItemsData);

    setSelectedItemsData(selectedItemsData);

    Object.keys(selectedKgs).forEach((itemId) => {
      const parsedItemId = parseInt(itemId);
      const item = items.find((item) => item.id === parsedItemId);
      const kg = selectedKgs[parsedItemId] || 0;

      if (item) {
        const price =
          kg * (usePricePerKg ? item.pricePerKg : item.pricePerSlot);
        selectedItemsData.push({
          name: item.name,
          quantity: kg,
          price,
          unit: "kg",
          id: item.id,
        });
      }
    });

    Object.keys(selectedSlots).forEach((itemId) => {
      const parsedItemId = parseInt(itemId);
      const item = items.find((item) => item.id === parsedItemId);
      const slots = selectedSlots[parsedItemId] || 0;

      if (item) {
        const price =
          slots * (usePricePerKg ? item.pricePerKg : item.pricePerSlot);
        selectedItemsData.push({
          name: item.name,
          quantity: slots,
          price,
          unit: "slots",
          id: item.id,
        });
      }
    });

    dispatch(setSelectedItems(selectedItemsData as SelectedItem[]));
  };

  return (
    <div className="relative bg-primaryText w-full py-[50px] px-[100px] flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-center text-[1.5rem] font-semibold mb-[20px]">
          Select Items in Kilogram(s)/Slot(s)
        </h2>
        <div className="flex flex-col justify-normal items-center gap-2">
          <h2>Click to Buy</h2>
          <button
            className={
              usePricePerKg
                ? `bg-secondary-bg text-primaryText px-[20px] py-[10px] w-max m-auto mb-[20px]`
                : "bg-background-fill text-primaryText px-[20px] py-[10px] w-max m-auto mb-[20px]"
            }
            onClick={() => {
              setUsePricePerKg(!usePricePerKg);
              setUseKgInput(!useKgInput);
            }}
          >
            {usePricePerKg ? "Per Slot" : "Per Kg"}
          </button>
        </div>
        <form className="flex flex-col justify-between items-center w-full">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-[20px] w-full"
            >
              <label
                htmlFor={`item-${item.id}-${useKgInput ? "kg" : "slots"}`}
                className="w-[140px] text-center"
              >
                {item.name}
              </label>
              <input
                type="number"
                id={`item-${item.id}-${useKgInput ? "kg" : "slots"}`}
                value={
                  useKgInput
                    ? selectedKgs[item.id] || ""
                    : selectedSlots[item.id] || ""
                }
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                className="appearance-none w-[100px] py-2 px-3 text-gray-700 border rounded-md leading-tight focus:outline-none focus:shadow-outline"
                placeholder={usePricePerKg ? "Kg" : "Slots"}
              />
              <span className="w-[140px] text-center">
                {usePricePerKg
                  ? `₦${item.pricePerKg} / Kg`
                  : `₦${item.pricePerSlot} / Slot`}
              </span>
              <span className="w-[170px] text-end">
                Price:{" "}
                {useKgInput
                  ? selectedKgs[item.id]
                    ? selectedKgs[item.id] * item.pricePerKg
                    : 0
                  : selectedSlots[item.id]
                  ? selectedSlots[item.id] * item.pricePerSlot
                  : 0}
              </span>
            </div>
          ))}
        </form>
        <p className="border-t border-black w-full text-[19px] text-end font-semibold pt-[10px] self-end">
          Total: ₦{totalPrice}
        </p>
        <button
          onClick={handleSubmit}
          className=" bg-secondary-bg text-white px-[20px] py-[10px] mt-4 rounded"
        >
          Submit
        </button>

        {showModal && (
          <OrderConfirmationModal
            selectedItems={selectedItemsData}
            onClose={handleModalClose}
            totalPrice={totalPrice}
            onFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default BuyerForm;
