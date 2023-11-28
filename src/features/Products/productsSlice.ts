import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Cut {
  name: string;
  pricePerKg: number;
  price: number;
  images: string[];
  content?: string;
}

interface MeatCuts {
  id: number;
  cuts: Cut[];
}

interface Product {
  id: number;
  name: string;
  pricePerKg: number;
  price: number;
  images: string;
  content: string;
  meatCuts: {
    goat?: MeatCuts;
    ram?: MeatCuts;
    cow?: MeatCuts;
  };
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("/data/productDetails.json");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("An error occurred while fetching products.");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<{ productId: Number; name: string }>
    ) => {
      const { productId, name } = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.name = name;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;

export default productSlice.reducer;
