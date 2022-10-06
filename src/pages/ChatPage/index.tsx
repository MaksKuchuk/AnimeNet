import React from "react";
import classes from "./ChatPage.module.scss";
import { ReactComponent as Backsvg } from "../../assets/img/icons/back.svg";
import { ReactComponent as Sendsvg } from "../../assets/img/icons/send.svg";
import { useSelector } from "react-redux";
import { selectCompanion } from "../../redux/companion/selectors";
import { useNavigate } from "react-router";
import UserPhoto from "../../components/UserPhoto";

const ChatPage: React.FC = () => {
  const companion = useSelector(selectCompanion);
  const navigate = useNavigate();
  const status = "online";

  return (
    <div className={classes.container}>
      <div className={classes.personInfo}>
        <Backsvg
          onClick={() => navigate("/usr/messenger")}
          className={classes.backsvg}
        />
        <div className={classes.namestatus}>
          <span className={classes.namestatus__name}>{companion.name}</span>
          <span className={classes.namestatus__status}>{status}</span>
        </div>
        <UserPhoto
          user={{
            id: "-",
            name: companion.name,
            defaultColor: companion.defaultColor,
            photoURL: companion.photoURL,
          }}
          size={40}
        />
      </div>
      <div className={classes.messages}></div>
      <div className={classes.input}>
        <input type="text" placeholder="Write message..." />
        <Sendsvg onClick={() => {}} className={classes.input__svg} />
      </div>
    </div>
  );
};

export default ChatPage;
