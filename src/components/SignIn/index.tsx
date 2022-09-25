import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../UI/Btn";
import classes from "./SignIn.module.scss";

const SignIn: React.FC = () => (
  <div className={classes.container}>
    <span className={classes.title}>Sign in</span>
    <input
      className={classes.inp}
      type="text"
      placeholder="Enter phone number"
    />
    <input
      className={classes.inp}
      type="password"
      placeholder="Enter password"
    />
    <Btn onClick={() => null} styles={classes.btn}>
      Continue
    </Btn>
    <div className={classes.block}></div>
    <span className={classes.bottomspan}>
      Forgot your password?
      <Link to="/forgetpassword">
        <span>Click here</span>
      </Link>
    </span>
  </div>
);

export default SignIn;
