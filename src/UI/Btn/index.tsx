import React from "react";
import classes from "./Btn.module.scss";

type IBtnProps = {
  children: string;
  styles: any;
};

const Btn: React.FC<IBtnProps> = ({ styles, children }) => {
  return (
    <button className={`${classes.btn} ${styles}`}>
      <span>{children}</span>
    </button>
  );
};

export default Btn;
