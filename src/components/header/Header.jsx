import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon";
import CartDropdown from "../cartDropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
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
            <div
              className="header-options-option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="header-options-option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
