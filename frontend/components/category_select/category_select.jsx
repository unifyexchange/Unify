import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="category-select-section">
        <h2 className="category-select-header">Explore collections</h2>
        <div className="category-select-options">
          {categories.map((category) => (
            <div
              className="category-select-option"
              key={category.id}
              onClick={() =>
                this.props.history.push(`/category/${category.name}`)
              }
            >
              <div className="category-img-section">
                <img className="category-img" src={category.image_url} />
              </div>
              <div className="category-name-section">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(CategorySelect);
