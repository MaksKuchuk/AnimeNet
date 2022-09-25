import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../UI/Btn";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <Link to="/">
          <div className={classes.content__logoblock}>
            <div className={classes.content__logo}>
              <span>a</span>
            </div>
            <h1 className={classes.content__name}>aninet</h1>
          </div>
        </Link>
        <Btn styles={classes.content__btn}>Sign in</Btn>
      </div>
    </div>
  );
};

export default Header;
