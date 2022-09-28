import React from "react";
import { setRegisterStage } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";
import Btn from "../../UI/Btn";
import classes from "./VerifyNumber.module.scss";

const VerifyNumber: React.FC = () => {
  const dispatch = useAppDispatch();

  const nextRegistrationStage = () => {
    dispatch(setRegisterStage("namepass"));
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Verify phone number</span>
      </div>
      <div className={classes.subtitle}>
        <span>We sent an SMS with a code to the number</span>
        <span className={classes.number}>+7 123 456-78-90</span>
      </div>

      <input
        className={classes.inp}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Confirmation code"
      />
      <Btn onClick={nextRegistrationStage} styles={classes.btn}>
        Continue
      </Btn>
      <div className={classes.block}></div>
      <span className={classes.bottomspan}>
        SMS will arrive within
        <span>01:57</span>
      </span>
    </div>
  );
};

export default VerifyNumber;
