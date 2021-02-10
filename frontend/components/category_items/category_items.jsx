import React from "react";
import UserFavoriteItemsContainer from "./../user_favorite_items/user_favorite_items_container";
import RecentItemsContainer from "./../recent_items/recent_items_container";
import CategoryViewContainer from "./../category_view/category_view_container";

import "./styles.scss";

class CategoryItems extends React.Component {
  constructor(props) {
    super(props);

    this.handleDownArrowClick = this.handleDownArrowClick.bind(this);
  }

  componentDidMount() {


    this.props.selectCategory(this.props.categoryName)
    this.props.fetchAllCategoryItems(this.props.categoryName);

  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  };

  handleDownArrowClick = () => {
    const element = document.getElementById("recent-items-container-baseline");
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { categoryItems } = this.props;
    const notFound = "No item found for this category";

    const renderLanding = () => (
      <div>
        <br className="home-break-line" />
        <div className="notFound">
          {" "}
          {Object.keys(categoryItems).length == 0 && notFound}{" "}
        </div>
        <br className="home-break-line" />
        <div id="recent-items-container-baseline">
          <RecentItemsContainer />
        </div>
      </div>
    );

    const renderCategoryView = () => (
      <div>
        <CategoryViewContainer goBack={this.goToPreviousPage} />
        <RecentItemsContainer />
      </div>
    );
    return (
      <div>
        <div className="main-content-section">
          { (Object.keys(categoryItems).length > 0 && this.props.categoryName) ? renderCategoryView() : renderLanding() }
        </div>
        <UserFavoriteItemsContainer />
      </div>
    );
  }
}

export default CategoryItems;
