import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsPhoto,
  selectName,
  selectPhotoColor,
} from "../../redux/profile/selectors";
import classes from "./UserPhoto.module.scss";

type IUserPhoto = {
  size?: number;
};

const UserPhoto: React.FC<IUserPhoto> = ({ size }) => {
  const isPhoto = useSelector(selectIsPhoto);
  const name = useSelector(selectName);
  const photoColor = useSelector(selectPhotoColor);

  const sizeStyle = size
    ? { width: size, height: size, fontSize: Number(size * 0.6) }
    : {};

  return (
    <div
      className={`${classes.container}`}
      style={{ backgroundColor: photoColor, ...sizeStyle }}
    >
      {isPhoto ? <img src="*" alt="*" /> : <span>{name && name[0]}</span>}
    </div>
  );
};

export default UserPhoto;
