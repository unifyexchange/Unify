import React from "react";
import ItemPreviewContainer from "./../item_preview/item_preview_container";
import ReactDOM from "react-dom";

import "./styles.scss";

class CategoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFavorites();
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    const { categoryItems, favorites, selectedCategory } = this.props;
    const favoriteIds = favorites.map((fav) => fav.item_id);

    return (
      <div className="category-view-section">
        <img
          className="remove-category-icon"
          src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2FleftArrow-removebg-preview.png?alt=media&token=2713a81f-d385-41f0-b6b0-1934e90893e0"
          onClick={() => this.props.goBack()}
        />
        <h2 className="category-view-header">
          {Object.keys(selectedCategory).length > 0 ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) :  null}
        </h2>
        <div className="category-view-content-section animated fadeInUp">
          {categoryItems.map((item) => (
            <ItemPreviewContainer
              item={item}
              favoriteIds={favoriteIds}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryView;
