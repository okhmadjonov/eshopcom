import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/" style={{ color: "#926" }}>
        e.SHOP
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
          style={{
            fontSize: "1.2em",
            color: "#acadac",
            opacity: "0.8",
            fontWeight: "350",
          }}
        >
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
