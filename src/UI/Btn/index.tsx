import React from "react";
import classes from "./Btn.module.scss";

type IBtnProps = {
  children: string;
  styles: StyleSheet;
  onClick: () => void;
  onActive?: boolean;
};

const Btn: React.FC<IBtnProps> = ({ onActive, styles, children, onClick }) => {
  const act = onActive === undefined ? true : onActive;

  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${styles} ${act && classes.active}`}
      disabled={!act}
    >
      <span>{children}</span>
    </button>
  );
};

export default Btn;
