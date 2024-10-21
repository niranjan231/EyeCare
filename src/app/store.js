import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { cartSlice } from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    allCart :cartReducer
  },
});