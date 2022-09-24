import React from "react";
import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
