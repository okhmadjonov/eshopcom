import React from "react";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Image" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button" style={{ color: "#e61f5b" }}>
      &#10008;
    </span>
  </div>
);

export default CheckoutItem;
