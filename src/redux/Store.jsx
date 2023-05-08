import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CartSlices";

export const Store = configureStore({
    reducer: {
        cart: counterReducer
    },
  })