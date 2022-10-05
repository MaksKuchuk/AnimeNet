import { Color } from "../globalTypes";

export type IMessagePerson = {
  id: string;
  name: string;
  lastMessage: string;
  defaultColor: Color;
  photoURL: string;
};

export type IMessagePeopleSlice = {
  people: IMessagePerson[];
};
