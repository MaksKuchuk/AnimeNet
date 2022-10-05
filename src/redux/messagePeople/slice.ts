import { createSlice } from "@reduxjs/toolkit";
import { IMessagePeopleSlice } from "./types";

const initialState: IMessagePeopleSlice = {
  people: [
    {
      id: "1",
      name: "Artemkalololololololo",
      lastMessage: "I said i love Minecraft",
      defaultColor: "#FF6565",
      photoURL:
        "https://freepngimg.com/thumb/anime/120355-piece-high-quality-anime-one-png-file-hd.png",
    },
    {
      id: "2",
      name: "Salunkalunka lulunka",
      lastMessage: "I am lololoshka but I am not a lox",
      defaultColor: "#BB65FF",
      photoURL: "",
    },
    {
      id: "3",
      name: "Gachimaster Dragonlopird",
      lastMessage:
        "Roll roll roll roll rollllllll I dont wanna roll roll roll roll roll I love Salunka malunka sdadad asdasdsa dsadas dasdsadas dsadsadasd as dasdasdasda asdasdad asd adaadas ada dsadasdasd asdsa",
      defaultColor: "#FF65A6",
      photoURL:
        "https://www.pngall.com/wp-content/uploads/2016/07/Anime-Download-PNG.png",
    },
  ],
};

const messagePeopleSlice = createSlice({
  name: "messagePeople",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = messagePeopleSlice.actions;

export default messagePeopleSlice.reducer;
