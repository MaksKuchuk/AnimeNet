import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsPhoto } from "../../redux/profile/selectors";
import UserPhoto from "../UserPhoto";
import classes from "./MainHeader.module.scss";
import { ReactComponent as Notification } from "../../assets/img/icons/notification.svg";
import { ReactComponent as Settings } from "../../assets/img/icons/settings.svg";
import { ReactComponent as Theme } from "../../assets/img/icons/idea.svg";
import { ReactComponent as Logout } from "../../assets/img/icons/logout.svg";

const MainHeader: React.FC = () => {
  const isPhoto = useSelector(selectIsPhoto);

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
        <div className={classes.menuBtn}>
          <Notification
            className={`${classes.menuBtn__icon} ${classes.notif}`}
          />
          <Theme className={classes.menuBtn__icon} />
          <Settings className={classes.menuBtn__icon} />
          {/*<Logout className={classes.menuBtn__icon} />*/}
        </div>
        {isPhoto ? <></> : <UserPhoto />}
      </div>
    </div>
  );
};

export default MainHeader;
