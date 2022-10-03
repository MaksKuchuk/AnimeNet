import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import modals from "./modals/slice";
import profile from "./profile/slice";
import messagePeople from "./messagePeople/slice";

export const store = configureStore({
  reducer: {
    modals,
    profile,
    messagePeople,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
