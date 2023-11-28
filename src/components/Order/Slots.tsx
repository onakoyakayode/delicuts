// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMeats,
//   selectMeatCuts,
//   selectMeatCutsStatus,
//   selectMeatCutsError,
// } from "../../features/Meats/meatSlice";
// import { AppDispatch } from "@/store";
// import Image from "next/image";

// interface Slot {
//   [slotType: string]: number;
// }

// const MeatCuts: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const meats = useSelector(selectMeatCuts);
//   const error = useSelector(selectMeatCutsError);
//   const status = useSelector(selectMeatCutsStatus);
//   const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: number }>(
//     { cow: 0, ram: 0, goat: 0 }
//   );

//   useEffect(() => {
//     dispatch(fetchMeats());
//   }, [dispatch]);

//   if (status === "loading") {
//     return <div>Loading.....</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   const cowSlots = meats.find((meat) => meat.name === "Cow Meat")?.slots;

//   const handleSlotChange =
//     (meatType: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
//       setSelectedSlots({ ...selectedSlots, [meatType]: +event.target.value });
//     };

//   const getTotalPrice = () => {
//     let totalPrice = 0;
//     for (const meatType in selectedSlots) {
//       totalPrice += selectedSlots[meatType];
//     }
//     return totalPrice;
//   };

//   return (
//     <div className="text-black bg-white h-[100vh] w-full">
//       <h1>Slots Meat</h1>
//       {/* <ul>
//         {cowSlots ? (
//           <ul>
//             {cowSlots.map((slot: Slot, index: number) => (
//               <li key={index}>
//                 Full Slot: {slot["Full Slot"]}, Half Slot: {slot["Half Slot"]},
//                 Quarter Slot: {slot["Quarter Slot"]},{" "}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No Slots</p>
//         )}
//       </ul> */}
//       {Object.entries(selectedSlots).map(([meatType, selectedSlot], index) => {
//         const meat = meats.find(
//           (meat) =>
//             meat.name ===
//             `${meatType.charAt(0).toUpperCase()}${meatType.slice(1)} Meat`
//         );
//         const slots = meat?.slots || [];

//         return (
//           <div key={index}>
//             <h2>{meatType.toUpperCase()}</h2>
//             <select value={selectedSlot} onChange={handleSlotChange(meatType)}>
//               <option value="">Select a slot</option>
//               {slots.map((slot: Slot, slotIndex: number) => (
//                 <optgroup label={`Slot ${slotIndex + 1}`} key={slotIndex}>
//                   {Object.entries(slot).map(([slotType, price]) => (
//                     <option key={slotType} value={price}>
//                       {slotType}: {price}
//                     </option>
//                   ))}
//                 </optgroup>
//               ))}
//             </select>
//             <p>
//               Selected Slot for {meatType}: {selectedSlot}
//             </p>
//           </div>
//         );
//       })}
//       <p>Total Price: {getTotalPrice()}</p>
//     </div>
//   );
// };

// export default MeatCuts;
