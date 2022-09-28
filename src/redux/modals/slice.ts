import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalsSlice, IRegisterStage } from "./types";

const initialState: IModalsSlice = {
  signInVisible: false,
  registerVisible: false,
  registerStage: "enternumber",
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
    setRegisterStage(state, action: PayloadAction<IRegisterStage>) {
      state.registerStage = action.payload;
    },
  },
});

export const { setSignInVisible, setRegisterVisible, setRegisterStage } =
  modalsSlice.actions;

export default modalsSlice.reducer;
