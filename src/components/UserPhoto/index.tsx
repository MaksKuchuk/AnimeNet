import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsPhoto,
  selectName,
  selectPhotoColor,
} from "../../redux/profile/selectors";
import classes from "./UserPhoto.module.scss";

const UserPhoto: React.FC = () => {
  const isPhoto = useSelector(selectIsPhoto);
  const name = useSelector(selectName);
  const photoColor = useSelector(selectPhotoColor);

  return (
    <div className={classes.container} style={{ backgroundColor: photoColor }}>
      {isPhoto ? <img src="*" alt="*" /> : <span>{name && name[0]}</span>}
    </div>
  );
};

export default UserPhoto;
