import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import Btn from "../../UI/Btn";
import Modal from "../../UI/Modal";
import SignIn from "../SignIn";
import classes from "./Header.module.scss";
import { setSignInVisible } from "../../redux/modals/slice";
import { selectSignInVisible } from "../../redux/modals/selectors";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const signInVisible = useSelector(selectSignInVisible);

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
        <Btn
          onClick={() => dispatch(setSignInVisible(true))}
          styles={classes.content__btn}
        >
          Sign in
        </Btn>
      </div>
      <Modal
        visible={signInVisible}
        setVisible={(b) => dispatch(setSignInVisible(b))}
        styles={classes.modalstyles}
      >
        <SignIn />
      </Modal>
    </div>
  );
};

export default Header;
