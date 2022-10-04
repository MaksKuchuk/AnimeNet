import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "../globalTypes";
import { IProfileSlice } from "./types";

const initialState: IProfileSlice = {
  isAuth: true,
  isPhoto: false,
  photoColor: "#6565FF",
  name: "Fredddi Vazovsky",
  description:
    "It is my favourite phrase from anime doctor stoune. I think I am not a stone. But I am not sure.",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setPhoto(state, action: PayloadAction<boolean>) {
      state.isPhoto = action.payload;
    },
    setPhotoColor(state, action: PayloadAction<Color>) {
      state.photoColor = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export const { setAuth, setPhoto, setPhotoColor, setName, setDescription } =
  profileSlice.actions;

export default profileSlice.reducer;
