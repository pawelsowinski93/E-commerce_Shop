import React from "react";

import CollectionItem from "../collectionItem/";

import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection">
    <h1 className="collection-title">{title.toUpperCase()}</h1>
    <div className="collection-preview">
      {items
        .filter((item, idx) => idx < 5)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
