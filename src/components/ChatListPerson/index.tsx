import React from "react";
import { IMessagePerson } from "../../redux/messagePeople/types";
import ChatListPersonPhoto from "../ChatListPersonPhoto";
import classes from "./ChatListPerson.module.scss";

const ChatListPerson: React.FC<IMessagePerson> = ({
  name,
  lastMessage,
  defaultColor,
  photoURL,
}) => {
  return (
    <div className={classes.container}>
      <ChatListPersonPhoto
        name={name}
        defaultColor={defaultColor}
        photoURL={photoURL}
      />
      <div className={classes.textBlock}>
        <span>{name}</span>
        <p>{lastMessage}</p>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default ChatListPerson;
