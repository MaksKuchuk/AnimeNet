import React from "react";
import { useSelector } from "react-redux";
import { selectCompanion } from "../../redux/companion/selectors";
import classes from "./CompanionPhoto.module.scss";

type ICompanionPhoto = {
  size?: number;
};

const CompanionPhoto: React.FC<ICompanionPhoto> = ({ size }) => {
  const companion = useSelector(selectCompanion);

  const sizeStyle = size
    ? { width: size, height: size, fontSize: Number(size * 0.6) }
    : {};

  return (
    <div
      className={`${classes.container}`}
      style={{
        backgroundColor: !companion.photoURL
          ? companion.defaultColor
          : "transparent",
        ...sizeStyle,
      }}
    >
      {companion.photoURL ? (
        <img src={companion.photoURL} alt="*" />
      ) : (
        <span>{companion.name && companion.name[0]}</span>
      )}
    </div>
  );
};

export default CompanionPhoto;
