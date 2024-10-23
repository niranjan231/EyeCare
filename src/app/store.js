import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/AddCart/cartSlice";
import authReducer from "../features/user/authSlice"
import categoriesReducer from '../features/Allcategory/categorySlice';
import productReducer from '../features/Product/productSlice';
export const store = configureStore({
  reducer: {
    allCart :cartReducer,
    user:authReducer,
    categories:categoriesReducer,
    product:productReducer,
    cart:cartReducer
  },
});