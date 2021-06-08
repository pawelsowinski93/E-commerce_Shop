import React from "react";

import "./cartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="cart-item-details">
      <span className="cart-item-details-name">{name}</span>
      <span className="cart-item-details-price">{`${quantity} X ${price}`}</span>
    </div>
  </div>
);

export default CartItem;
