import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../UI/Btn";
import classes from "./SignIn.module.scss";

const SignIn: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.title}>
      <span>Sign in</span>
    </div>
    <input
      placeholder="Enter phone number"
      className={`${classes.inp} ${classes.inp1}`}
      type="text"
    />
    <input
      placeholder="Enter password"
      className={`${classes.inp} ${classes.inp2}`}
      type="password"
    />
    <Btn onActive={true} onClick={() => {}} styles={classes.btn}>
      Continue
    </Btn>
    <div className={classes.block}></div>
    <span className={classes.bottomspan}>
      Forgot your password?{" "}
      <Link to="/forgetpassword">
        <span>Click here</span>
      </Link>
    </span>
  </div>
);

export default SignIn;
