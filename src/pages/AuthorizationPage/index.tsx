import React from "react";
import classes from "./AuthorizationPage.module.scss";
import Btn from "../../UI/Btn";
import pngwing from "../../assets/img/pngwing.png";
import Modal from "../../UI/Modal";
import { useSelector } from "react-redux";
import { selectRegisterVisible } from "../../redux/modals/selectors";
import { setRegisterVisible } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";

const AuthorizationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const registerVisible = useSelector(selectRegisterVisible);

  return (
    <div className={classes.content}>
      <div className={classes.content__reg}>
        <h1 className={classes.h1txt}>The best place for anime</h1>
        <span className={classes.spantxt}>
          Social network for all lovers of anime. You can share your emotions
          and have a good time.
        </span>
        <Btn
          onClick={() => dispatch(setRegisterVisible(true))}
          styles={classes.btn}
        >
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
        a
      </Modal>
    </div>
  );
};

export default AuthorizationPage;
