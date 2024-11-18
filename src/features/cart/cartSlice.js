import { createSlice } from "@reduxjs/toolkit";

import { sumPrice, sumQuantity } from "../../helpers/helper.js";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.total = sumPrice(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    increaseItem: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    checkout: (state) => {
      (state.selectedItems = []),
        (state.itemsCounter = 0),
        (state.total = 0),
        (state.checkout = true);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increaseItem, decreaseItem, checkout } =
  cartSlice.actions;
