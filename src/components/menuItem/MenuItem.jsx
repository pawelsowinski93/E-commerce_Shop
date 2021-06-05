import React from "react";
import { withRouter } from "react-router-dom";

import "./menuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="menu-item-background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="menu-item-content">
      <h1 className="menu-item-content-title">{title.toUpperCase()}</h1>
      <p className="menu-item-content-subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
