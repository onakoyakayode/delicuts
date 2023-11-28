import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";
import blogReducer from "../features/blogs/blogsSlice";
import productReducer from "../features/Products/productsSlice";
import meatReducer from "../features/Meats/meatSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
  blogs: blogReducer,
  products: productReducer,
  meatCuts: meatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
