import React from "react";
import { withRouter } from "react-router-dom";

const ListedItem = ({ item, history }) => {
  const itemImage = () => (
    <img className="listed-item-img" src={item.image_urls[0]} />
  );

  const itemName = () => (
    <div className="listed-item-info">
      <h3 className="listed-item-name">{item.name}</h3>
    </div>
  );

  const itemPrice = () => (
    <div className="listed-item-price-section">
      <h3 className="listed-item-price">${item.price.toFixed(2)}</h3>
    </div>
  );

  return (
    <li
      className="listed-items-section animated fadeInDown"
      onClick={() => history.push({ pathname: `/items/${item.id}`, item })}
    >
      {itemImage()}
      {itemName()}
      {itemPrice()}
    </li>
  );
};

export default withRouter(ListedItem);
