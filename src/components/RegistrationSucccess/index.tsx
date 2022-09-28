import React from "react";
import { setRegisterVisible, setSignInVisible } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";
import Btn from "../../UI/Btn";
import classes from "./RegistrationSuccess.module.scss";

const RegistrationSuccess: React.FC = () => {
  const dispatch = useAppDispatch();

  const toSignIn = () => {
    dispatch(setSignInVisible(true));
    dispatch(setRegisterVisible(false));
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Registration</span>
      </div>
      <div className={classes.subtitle}>
        <span>Registration completed successfully. You can sign in.</span>
      </div>
      <Btn onClick={toSignIn} styles={classes.btn}>
        Sign in
      </Btn>
      <div className={classes.block}></div>
      <span className={classes.bottomspan}>
        Do not forget to enter information about yourself in your personal
        account so that it is easier for friends to find you
      </span>
    </div>
  );
};

export default RegistrationSuccess;
