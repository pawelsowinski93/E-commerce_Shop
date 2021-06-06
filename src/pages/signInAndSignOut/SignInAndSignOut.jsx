import React from "react";

import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

import "./signInAndSignOut.scss";

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignOut;
