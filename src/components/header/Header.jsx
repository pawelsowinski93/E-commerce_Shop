import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="header-logo-container" to="/">
      <Logo className="header-logo-container-logo" />
    </Link>
    <div className="header-options">
      <Link className="header-options-option" to="/shop">
        SHOP
      </Link>
      <Link className="header-options-option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <>
          <div className="header-options-option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          <div className="header-options-option user-name">{`/ USER NAME`}</div>
        </>
      ) : (
        <Link className="header-options-option" to="/signIn">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
