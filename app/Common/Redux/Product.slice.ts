import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type InitialStateType = {
   isLineView: boolean;
};

const initialState: InitialStateType = {
   isLineView: false,
};

export const productSlice = createSlice({
   name: "productSlice",
   initialState,
   reducers: {
      setLineView: (state, action: PayloadAction<boolean>) => {
         state.isLineView = action.payload;
      },
   },
});

export const { setLineView } = productSlice.actions;

export default productSlice.reducer;
