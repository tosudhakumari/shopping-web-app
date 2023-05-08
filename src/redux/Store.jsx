import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CartSlices";
import productReducer from "./Slices/productSlice";

export const Store = configureStore({
    reducer: {
        cart: counterReducer,
        products : productReducer
    },
  })