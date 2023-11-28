import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store"; // Replace with your root reducer path
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from "@/features/Products/productsSlice";
import { AppDispatch } from "@/store";

interface Meat {
  name: string;
  pricePerKg?: number;
  images?: string[];
  content?: string;
  price?: number;
}

interface MeatCuts {
  [key: string]:
    | string
    | {
        id: number;
        cuts: Meat[];
      };
}

interface Product {
  id: number;
  name: string;
  pricePerKg: number;
  price: number;
  images: string;
  content: string;
  meatCuts?: MeatCuts;
}

const MeatSelection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const error = useSelector(selectProductsError);
  const status = useSelector(selectProductsStatus);
  const [selectedQuantity, setSelectedQuantity] = useState<string | number>("");
  const [selectedMeat, setSelectedMeat] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Function to handle selection change
  const handleMeatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMeat(event.target.value);
    setSelectedQuantity("");
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedQuantity(event.target.value);
  };

  const product = products[0];

  // Function to calculate the total price based on selection
  const calculateTotalPrice = () => {
    if (selectedMeat && selectedQuantity && product.meatCuts) {
      const selectedCuts = product.meatCuts?.goat?.cuts || [];
      const selectedMeatObj = selectedCuts.find(
        (meat) => meat.name === selectedQuantity
      );

      if (selectedMeatObj) {
        const price = selectedMeatObj.price;
        return price
          ? `Total Price: ₦${price}`
          : "Please select a valid quantity";
      }
      return "Please select a valid meat cut";
    }
    return "";
  };

  return (
    <div>
      <h2>Meat Selection</h2>
      <select value={selectedMeat} onChange={handleMeatChange}>
        {product?.meatCuts &&
          Object.keys(product?.meatCuts).map((meatType) => (
            <option key={meatType} value={meatType}>
              {meatType}
            </option>
          ))}
      </select>
      {selectedMeat === "goat" && product?.meatCuts?.goat && (
        <>
          <select value={selectedQuantity} onChange={handleQuantityChange}>
            {product?.meatCuts.goat.cuts.map((cut) => (
              <option key={cut.name} value={cut.name}>
                {cut.name}
              </option>
            ))}
          </select>
          <p>{calculateTotalPrice()}</p>
        </>
      )}
    </div>
  );
};

export default MeatSelection;
