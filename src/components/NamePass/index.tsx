import React from "react";
import { setRegisterStage } from "../../redux/modals/slice";
import { useAppDispatch } from "../../redux/store";
import Btn from "../../UI/Btn";
import classes from "./NamePass.module.scss";

const NamePass: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isBtnActive, setBtnActive] = React.useState<boolean>(false);

  const nextRegistrationStage = () => {
    dispatch(setRegisterStage("success"));
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Registration</span>
      </div>
      <input
        placeholder="Enter name"
        className={`${classes.inp} ${classes.inp1}`}
        type="text"
      />
      <input
        placeholder="Enter password"
        className={`${classes.inp} ${classes.inp2}`}
        type="password"
      />
      <Btn
        onActive={isBtnActive || true}
        onClick={nextRegistrationStage}
        styles={classes.btn}
      >
        Continue
      </Btn>
      <div className={classes.block}></div>
      <div className={classes.expression}>
        <span className={classes.success}>
          Nickname must be between 3 and 24 characters
        </span>
        <span className={classes.wrong}>Nickname must be unique</span>
        <span className={classes.success}>
          Password must be longer then 8 characters
        </span>
        <span className={classes.success}>
          Password must contain uppercase letter
        </span>
        <span className={classes.wrong}>
          Password must contain lowercase letter
        </span>
        <span className={classes.wrong}>Password must contain number</span>
        <span className={classes.success}>
          Password must contain special character(./\@_-)
        </span>
      </div>
    </div>
  );
};

export default NamePass;
