import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/" style={{ color: "Indianred" }}>
       Book
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
