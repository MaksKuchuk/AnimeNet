import React from "react";
import classes from "./AuthorizationPage.module.scss";
import Btn from "../../UI/Btn";
import pngwing from "../../assets/img/pngwing.png";
import Modal from "../../UI/Modal";
import { useSelector } from "react-redux";
import {
  selectRegisterStage,
  selectRegisterVisible,
} from "../../redux/modals/selectors";
import { setRegisterStage, setRegisterVisible } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";
import Register from "../../components/Register";
import VerifyNumber from "../../components/VerifyNumber";
import NamePass from "../../components/NamePass";

const AuthorizationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const registerVisible = useSelector(selectRegisterVisible);
  const registerStage = useSelector(selectRegisterStage);

  const chooseRegisterStage = () => {
    if (registerStage === "enternumber") {
      return <Register />;
    } else if (registerStage === "verifynumber") {
      return <VerifyNumber />;
    } else if (registerStage === "namepass") {
      return <NamePass />;
    } else if (registerStage === "success") {
      return <></>;
    }
  };

  const openModal = () => {
    dispatch(setRegisterStage("enternumber"));
    dispatch(setRegisterVisible(true));
  };

  return (
    <div className={classes.content}>
      <div className={classes.content__reg}>
        <h1 className={classes.h1txt}>The best place for anime</h1>
        <span className={classes.spantxt}>
          Social network for all lovers of anime. You can share your emotions
          and have a good time.
        </span>
        <Btn onClick={openModal} styles={classes.btn}>
          Create a profile
        </Btn>
      </div>
      <div className={classes.content__image}></div>
      <img src={pngwing} alt="*" />

      <Modal
        visible={registerVisible}
        setVisible={(b) => dispatch(setRegisterVisible(b))}
        styles={classes.modalstyles}
      >
        {chooseRegisterStage()}
      </Modal>
    </div>
  );
};

export default AuthorizationPage;
