import React from "react";
import { withRouter } from "react-router-dom";
import ListedItem from "./listed_item";

import "./styles.scss";

class UserFavoriteItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllListedItems();
    this.props.fetchAllFavoriteItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites.length !== nextProps.favorites.length) {
      this.props.fetchAllFavoriteItems();
    }
  }

  render() {
    return (
      <div>
        <ul className="user-favorites-card animated fadeInRight">
          <h2 className="user-favorites-title">Favorites</h2>
          {this.props.favoriteItems.map((item) => {
            return <ListedItem key={item.id} item={item} />;
          })}
          <h2 className="user-favorites-title">Listed Items</h2>
          {this.props.listedItems.map((item) => {
            return <ListedItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(UserFavoriteItemsIndex);
