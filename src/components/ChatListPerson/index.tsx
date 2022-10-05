import React from "react";
import { useNavigate } from "react-router";
import { setCompanion } from "../../redux/companion/slice";
import { IMessagePerson } from "../../redux/messagePeople/types";
import { useAppDispatch } from "../../redux/store";
import ChatListPersonPhoto from "../ChatListPersonPhoto";
import classes from "./ChatListPerson.module.scss";

const ChatListPerson: React.FC<IMessagePerson> = ({
  id,
  name,
  lastMessage,
  defaultColor,
  photoURL,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //позже поменять, чтобы данные о пользователе приходили с сервера
  const goToChat = () => {
    dispatch(setCompanion({ id, name, defaultColor, photoURL }));
    navigate(`/usr/messenger/${id}`);
  };

  return (
    <div className={classes.container}>
      <ChatListPersonPhoto
        name={name}
        defaultColor={defaultColor}
        photoURL={photoURL}
      />
      <div onClick={goToChat} className={classes.textBlock}>
        <span>{name}</span>
        <p>{lastMessage}</p>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default ChatListPerson;
