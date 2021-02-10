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
          src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fleft-arrow.png?alt=media&token=8e44b88c-88d5-4e58-ac06-0b48e221f495"
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
