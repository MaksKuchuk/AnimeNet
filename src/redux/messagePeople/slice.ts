import { createSlice } from "@reduxjs/toolkit";
import { IMessagePeopleSlice } from "./types";

const initialState: IMessagePeopleSlice = {
  people: [],
};

const messagePeopleSlice = createSlice({
  name: "messagePeople",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = messagePeopleSlice.actions;

export default messagePeopleSlice.reducer;
