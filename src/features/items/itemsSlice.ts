import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Item {
  id: number;
  name: string;
  pricePerKg: number;
  weight: number;
  icon: string;
  image: string;
  content: string;
  totalSlots: number;
  pricePerSlot: number;
}

interface SelectedItem {
  name: string;
  unit: "kg" | "slots";
  quantity?: number;
  price: number;
}

interface ItemsState {
  items: Item[];
  selectedItems: SelectedItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  selectedItems: [],
  status: "idle",
  error: null,
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  try {
    const response = await fetch("/data/items.json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching items.");
  }
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setWeight: (
      state,
      action: PayloadAction<{ itemId: number; weight: number }>
    ) => {
      const { itemId, weight } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.weight = weight;
      }
    },
    setSelectedItems: (state, action: PayloadAction<SelectedItem[]>) => {
      state.selectedItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { setWeight, setSelectedItems } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items.items;
export const selectSelectedItems = (state: RootState) =>
  state.items.selectedItems;
export const selectItemsStatus = (state: RootState) => state.items.status;
export const selectItemsError = (state: RootState) => state.items.error;

export default itemsSlice.reducer;
