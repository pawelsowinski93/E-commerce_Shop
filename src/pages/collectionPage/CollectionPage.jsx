import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collectionItem";

import { selectCollection } from "../../redux/shop/shopSelectors";

import "./collectionPage.scss";

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection">
      <h2 className="collection-title">{title}</h2>
      <div className="collection-items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
