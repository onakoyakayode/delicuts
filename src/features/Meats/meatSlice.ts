import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Meat {
  id: number;
  name: string;
  pricePerKg: number;
  slots?: { [key: string]: number };
  specialRequest?: { [key: string]: number };
}

export const fetchMeats = createAsyncThunk("meats/fetchMeats", async () => {
  try {
    const response = await fetch("/data/slots.json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching items");
  }
});

interface MeatState {
  meats: Meat[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MeatState = {
  meats: [],
  status: "idle",
  error: null,
};

const meatsSlice = createSlice({
  name: "meatCuts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meats = action.payload; // Assuming the payload contains data for cow, ram, and goat
      })
      .addCase(fetchMeats.rejected, (state) => {
        state.status = "failed";
        state.error = "An error occurred while fetching items";
      });
  },
});

// export const { setSlots } = meatsSlice.actions;
export default meatsSlice.reducer;

export const selectMeatCuts = (state: RootState) => state.meatCuts.meats;
export const selectMeatCutsStatus = (state: RootState) => state.meatCuts.status;
export const selectMeatCutsError = (state: RootState) => state.meatCuts.error;
