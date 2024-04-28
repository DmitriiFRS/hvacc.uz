import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Product.slice";

export const store = configureStore({
   reducer: {
      ProductSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
