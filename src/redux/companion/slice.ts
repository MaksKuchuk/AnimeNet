import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompanion } from "./types";

const initialState: ICompanion = {
  id: "",
  name: "",
  defaultColor: "#",
  photoURL: "",
};

const companionSlice = createSlice({
  name: "companion",
  initialState,
  reducers: {
    setCompanion(state, action: PayloadAction<ICompanion>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.defaultColor = action.payload.defaultColor;
      state.photoURL = action.payload.photoURL;
    },
  },
});

export const { setCompanion } = companionSlice.actions;

export default companionSlice.reducer;
