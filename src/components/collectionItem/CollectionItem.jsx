import React from "react";

import "./collectionItem.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
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
  </div>
);

export default CollectionItem;
