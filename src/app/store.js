import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { cartSlice } from "../features/cartSlice";
import authReducer from "../features/user/authSlice"

export const store = configureStore({
  reducer: {
    allCart :cartReducer,
    user:authReducer
  },
});