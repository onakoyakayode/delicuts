// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProducts,
//   selectProducts,
//   selectProductsStatus,
//   selectProductsError,
// } from "@/features/Products/productsSlice";
// import { AppDispatch } from "@/store";

// const CowMeat: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const products = useSelector(selectProducts);
//   const status = useSelector(selectProductsStatus);
//   const error = useSelector(selectProductsError);

//   //   const cowMeats =
//   //     products.length > 2 ? products[2].meatCuts.cow?.cuts ?? [] : [];

//   //   console.log(cowMeats);
//   const cowCuts = products[0]?.meatCuts?.cow?.cuts ?? [];
//   console.log(cowCuts);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {/* <ul>
//         {cowMeats.map((cow, idx) => (
//           <li key={idx}>{cow.name}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default CowMeat;
