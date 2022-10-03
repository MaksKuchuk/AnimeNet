import React from "react";
import IconBtn from "../../UI/IconBtn";
import classes from "./NavBar.module.scss";
import { ReactComponent as mypagesvg } from "../../assets/img/icons/mypage.svg";
import { ReactComponent as messengersvg } from "../../assets/img/icons/messenger.svg";
import { ReactComponent as friendssvg } from "../../assets/img/icons/friends.svg";
import { ReactComponent as branchessvg } from "../../assets/img/icons/branches.svg";
import { ReactComponent as animesvg } from "../../assets/img/icons/anime.svg";
import { ReactComponent as helpsvg } from "../../assets/img/icons/help.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className={classes.container}>
      <Link to="/usr/mypage">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={mypagesvg}>
          My page
        </IconBtn>
      </Link>
      <Link to="/usr/messenger">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={messengersvg}>
          Messenger
        </IconBtn>
      </Link>
      <Link to="/usr/friends">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={friendssvg}>
          Friends
        </IconBtn>
      </Link>
      <Link to="/usr/branches">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={branchessvg}>
          Branches
        </IconBtn>
      </Link>
      <Link to="/usr/anime">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={animesvg}>
          Anime
        </IconBtn>
      </Link>
      <Link to="/usr/help">
        <IconBtn styles={classes.btn} onClick={() => {}} SvgElem={helpsvg}>
          Help
        </IconBtn>
      </Link>
    </div>
  );
};

export default NavBar;
