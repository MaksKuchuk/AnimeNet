import React from "react";
import classes from "./AuthorizationLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const AuthorizationLayout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthorizationLayout;
