import React from "react";
import IconBtn from "../../UI/IconBtn";
import classes from "./NavBar.module.scss";
import { ReactComponent as mypagesvg } from "../../assets/img/icons/mypage.svg";
import { ReactComponent as messengersvg } from "../../assets/img/icons/messenger.svg";
import { ReactComponent as friendssvg } from "../../assets/img/icons/friends.svg";
import { ReactComponent as branchessvg } from "../../assets/img/icons/branches.svg";
import { ReactComponent as animesvg } from "../../assets/img/icons/anime.svg";
import { ReactComponent as helpsvg } from "../../assets/img/icons/help.svg";

const NavBar: React.FC = () => {
  return (
    <div className={classes.container}>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={mypagesvg}>
        My page
      </IconBtn>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={messengersvg}>
        Messanger
      </IconBtn>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={friendssvg}>
        Friends
      </IconBtn>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={branchessvg}>
        Branches
      </IconBtn>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={animesvg}>
        Anime
      </IconBtn>
      <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={helpsvg}>
        Help
      </IconBtn>
    </div>
  );
};

export default NavBar;
