import { hrtime } from "process";
import React from "react";
import classes from "./Btn.module.scss";

type IBtnProps = {
  children: string;
  width: number;
  height: number;
  fz: number;
};

const Btn: React.FC<IBtnProps> = ({ fz, width, height, children }) => {
  return (
    <button style={{ width, height }} className={classes.btn}>
      <span style={{ lineHeight: fz, fontSize: fz }}>{children}</span>
    </button>
  );
};

export default Btn;
