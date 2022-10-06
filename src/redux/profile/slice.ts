import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "../globalTypes";
import { IProfileSlice } from "./types";

const initialState: IProfileSlice = {
  isAuth: true,
  id: "1",
  defaultColor: "#6565FF",
  name: "Fredddi Vazovsky",
  photoURL: "",
  description:
    "It is my favourite phrase from anime doctor stone. I think I am not a stone. But I am not sure.",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setPhotoURL(state, action: PayloadAction<string>) {
      state.photoURL = action.payload;
    },
    setPhotoColor(state, action: PayloadAction<Color>) {
      state.defaultColor = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export const { setAuth, setPhotoURL, setPhotoColor, setName, setDescription } =
  profileSlice.actions;

export default profileSlice.reducer;
