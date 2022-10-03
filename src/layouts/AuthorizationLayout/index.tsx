import React from "react";
import classes from "./AuthorizationLayout.module.scss";
import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";

const AuthorizationLayout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <AuthHeader />
      <div className={classes.content}>
        <div className={`${classes.shadow} ${classes.shadow1}`}></div>
        <div className={`${classes.shadow} ${classes.shadow2}`}></div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthorizationLayout;
