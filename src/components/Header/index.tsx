import React from "react";
import Btn from "../../UI/Btn";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <div className={classes.content__logo}>
          <span>a</span>
        </div>
        <h1 className={classes.content__name}>aninet</h1>
        <Btn fz={10} width={200} height={40}>
          Sign in
        </Btn>
      </div>
    </div>
  );
};

export default Header;
