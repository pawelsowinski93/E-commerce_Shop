import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cartActions";

import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item-image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-quantity">
        <div
          onClick={() => removeItem(cartItem)}
          className="checkout-item-quantity-arrow"
        >
          &#10094;
        </div>
        <span className="checkout-item-quantity-value">{quantity}</span>
        <div
          onClick={() => addItem(cartItem)}
          className="checkout-item-quantity-arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="checkout-item-price">{price}</span>
      <div
        onClick={() => clearItem(cartItem)}
        className="checkout-item-remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
