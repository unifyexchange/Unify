import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";



class ItemPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  moveToReport = (item) => {
    this.props.history.push({ pathname: `/report/item/${item.id}`, item });
  };

  render() {
    const { item, favoriteIds } = this.props;

    const greenHeart = () => (
      <img
        onClick={() => this.props.deleteFavorite(item.id)}
        className="favorite-heart-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/834px-A_perfect_SVG_heart.svg.png"
      />
    );

    const greyHeart = () => (
      <img
        onClick={() => this.props.addFavorite(item.id)}
        className="favorite-heart-icon"
        src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2FgreyHeart.png?alt=media&token=35ea9664-714c-4d5b-a3a7-cf9c4f6d48c6"
      />
    );

    return (
      <div className="item-preview-section" key={item.id}>
        <div
          className="item-preview-img-section"
          onClick={() =>
            this.props.history.push({ pathname: `/items/${item.id}`, item })
          }
        >
          <img className="item-preview-img" src={item.image_urls[0]} />
        </div>
        <div
          className="item-preview-info-section"
          onClick={() => this.props.history.push(`/items/${item.id}`)}
        >
          <h2 className="item-preview-name">{item.name}</h2>
          <h4 className="item-preview-price">${item.price.toFixed(2)}</h4>
        </div>
        <br className="home-break-line" />
        <div className="favorites-section">
          {favoriteIds.includes(item.id) ? greenHeart() : greyHeart()}
          <div className="report-section">
            <button
              onClick={() => this.moveToReport(item)}
              className="reportBtn"
            >
              Report
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemPreview);
