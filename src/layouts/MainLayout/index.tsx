import React from "react";
import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import NavBar from "../../components/NavBar";

const MainLayout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <MainHeader />
      <div className={classes.content}>
        <div className={`${classes.shadow} ${classes.shadow1}`}></div>
        <div className={`${classes.shadow} ${classes.shadow2}`}></div>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
