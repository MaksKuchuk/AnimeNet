import React from "react";
import classes from "./Btn.module.scss";

type IBtnProps = {
  children: string;
  styles: StyleSheet;
  onClick: () => void;
};

const Btn: React.FC<IBtnProps> = ({ styles, children, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${styles}`}>
      <span>{children}</span>
    </button>
  );
};

export default Btn;
