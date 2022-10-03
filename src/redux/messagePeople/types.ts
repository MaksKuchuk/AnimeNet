export type IMessagePerson = {
  id: string;
  name: string;
  lastMessage: string;
};

export type IMessagePeopleSlice = {
  people: IMessagePerson[];
};
