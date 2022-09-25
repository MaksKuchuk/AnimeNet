import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import modals from "./modals/slice";

export const store = configureStore({
  reducer: {
    modals,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
