import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutPageHeader from "../../components/checkoutPageHeader";
import CheckoutItem from "../../components/checkoutItem";
import StripeButton from "../../components/stripeButton";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cartSelectors";

import "./checkoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => {
  const listItems = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <div className="checkout-page">
      <div className="checkout-page-header">
        {listItems.map((item, index) => (
          <CheckoutPageHeader key={index} title={item} />
        ))}
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout-page-total">TOTAL: ${total}</div>
      <div className="test-warning">
        * Please use the following test credit card for payments * 4242 4242
        4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
