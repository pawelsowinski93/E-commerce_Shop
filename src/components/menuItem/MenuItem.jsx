import React from "react";

import "./menuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
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

export default MenuItem;
