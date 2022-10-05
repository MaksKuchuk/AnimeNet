import React from "react";
import { Color } from "../../redux/globalTypes";
import classes from "./ChatListPersonPhoto.module.scss";

type IChatListPersonPhoto = {
  name: string;
  photoURL: string;
  defaultColor: Color;
};

const ChatListPersonPhoto: React.FC<IChatListPersonPhoto> = ({
  name,
  photoURL,
  defaultColor,
}) => {
  return (
    <div className={classes.container}>
      {photoURL ? (
        <img className={classes.img} src={photoURL} alt="*" />
      ) : (
        <div
          style={{ backgroundColor: defaultColor }}
          className={classes.defaultImg}
        >
          <span>{name && name[0]}</span>
        </div>
      )}
    </div>
  );
};

export default ChatListPersonPhoto;
