import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import modals from "./modals/slice";
import profile from "./profile/slice";

export const store = configureStore({
  reducer: {
    modals,
    profile,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
