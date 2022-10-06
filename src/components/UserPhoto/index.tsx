import React from "react";
import { IUser } from "../../redux/globalTypes";
import classes from "./UserPhoto.module.scss";

type IUserPhoto = {
  user: IUser;
  size: number;
};

const UserPhoto: React.FC<IUserPhoto> = ({ user, size }) => {
  const sizeStyle = {
    minWidth: size,
    height: size,
    fontSize: Number(size * 0.6),
  };

  return (
    <div
      className={`${classes.container}`}
      style={{
        backgroundColor: user.photoURL ? "transparent" : user.defaultColor,
        ...sizeStyle,
      }}
    >
      {user.photoURL ? (
        <img
          style={{ width: size, height: size }}
          src={user.photoURL}
          alt="*"
        />
      ) : (
        <span className={classes.span}>{user.name && user.name[0]}</span>
      )}
    </div>
  );
};

export default UserPhoto;
