import React, { ReactElement } from "react";
import classes from "./MessengerPage.module.scss";
import { ReactComponent as FindSvg } from "../../assets/img/icons/find.svg";
import { useSelector } from "react-redux";
import { selectPeople } from "../../redux/messagePeople/selectors";
import { IMessagePerson } from "../../redux/messagePeople/types";
import ChatListPerson from "../../components/ChatListPerson";

const MessengerPage = () => {
  const people = useSelector(selectPeople);

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <FindSvg className={classes.search__svg} />
        <input type="text" placeholder="Find message" />
      </div>
      <div className={classes.chatList}>
        {people.map((obj: IMessagePerson) => (
          <ChatListPerson key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default MessengerPage;
