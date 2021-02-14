import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="container">
        <Link className="logo-container" to="/">
          Clothes House
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/contact">
            Contact
          </Link>

          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              Sign out
            </div>
          ) : (
            <Link className="option" to="/signin">
              Sign in
            </Link>
          )}
          <Link className="option" to="/bag">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
