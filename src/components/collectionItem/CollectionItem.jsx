import React from "react";

import { connect } from "react-redux";

import CustomButton from "../customButton";

import { addItem } from "../../redux/cart/cartActions";

import "./collectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="collection-item-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-item-footer">
        <span className="collection-item-footer-name">{name}</span>
        <span className="collection-item-footer-price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
