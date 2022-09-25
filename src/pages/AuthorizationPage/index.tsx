import React from "react";
import classes from "./AuthorizationPage.module.scss";
import Btn from "../../UI/Btn";
import pngwing from "../../assets/img/pngwing.png";

const AuthorizationPage: React.FC = () => {
  return (
    <div className={classes.content}>
      <div className={classes.content__reg}>
        <h1 className={classes.h1txt}>The best place for anime</h1>
        <span className={classes.spantxt}>
          Social network for all lovers of anime. You can share your emotions
          and have a good time.
        </span>
        <Btn styles={classes.btn}>Create a profile</Btn>
      </div>
      <div className={classes.content__image}></div>
      <img src={pngwing} alt="*" />
    </div>
  );
};

export default AuthorizationPage;
