import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalsSlice } from "./types";

const initialState: IModalsSlice = {
  signInVisible: false,
  registerVisible: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setSignInVisible(state, action: PayloadAction<boolean>) {
      state.signInVisible = action.payload;
    },
    setRegisterVisible(state, action: PayloadAction<boolean>) {
      state.registerVisible = action.payload;
    },
  },
});

export const { setSignInVisible, setRegisterVisible } = modalsSlice.actions;

export default modalsSlice.reducer;
