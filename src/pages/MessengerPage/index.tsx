import React from "react";
import classes from "./MessengerPage.module.scss";
import { ReactComponent as FindSvg } from "../../assets/img/icons/find.svg";

const MessengerPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <FindSvg className={classes.search__svg} />
        <input type="text" placeholder="Find message" />
      </div>
      <div className={classes.chatList}></div>
    </div>
  );
};

export default MessengerPage;
