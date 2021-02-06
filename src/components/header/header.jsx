import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/" style={{ color: "#926" }}>
        e.BOOK
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
        <Link
          className="option"
          to="/bag"
          style={{ color: "#926", opacity: "0.8", fontWeight: "100" }}
        >
          <i className="fa fa-shopping-basket"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
