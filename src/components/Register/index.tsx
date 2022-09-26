import React from "react";
import { setRegisterStage } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";
import Btn from "../../UI/Btn";
import classes from "./Register.module.scss";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const nextRegistrationStage = () => {
    dispatch(setRegisterStage("verifynumber"));
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Enter phone number</span>
      </div>
      <div className={classes.subtitle}>
        <span>Your phone number will be used to log into your account</span>
      </div>
      <input
        className={classes.inp}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Enter phone number"
      />
      <Btn onClick={nextRegistrationStage} styles={classes.btn}>
        Continue
      </Btn>
      <div className={classes.block}></div>
      <span className={classes.bottomspan}>
        By submitting the form, you consent to the processing of personal data
      </span>
    </div>
  );
};

export default Register;
