import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  showSearchResults() {
    const searchResults = document.getElementsByClassName("search-results")[0];
    searchResults.classList.toggle("hidden-menu");
  }
  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0).toLowerCase() });
  }

  handleClick(e) {
    const button = document.getElementsByClassName("search-input")[0];
    if (document.getElementsByClassName("search-bar")[0].contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    const searchResults = document.getElementsByClassName("search-results")[0];
    if (searchResults.classList.contains("hidden-menu")) {
    } else {
      searchResults.classList.toggle("hidden-menu");
    }
  }

  render() {
    let filteredItems = this.props.items.filter((item) => {
      if (
        item.name.toLowerCase().indexOf(this.state.search) !== -1 ||
        item.subtitle.toLowerCase().indexOf(this.state.search) !== -1
      ) {
        return item;
      }
    });

    return (
      <div className="search-bar-container">
        <form className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={this.state.search}
            onChange={this.updateSearch}
            onClick={this.showSearchResults}
          />
          <ul className="search-results hidden-menu">
            <h4 className="search-result-label">Items</h4>

            {filteredItems.slice(0, 8).map((item) => {
              return (
                <li
                  onClick={() => this.props.history.push(`/items/${item.id}`)}
                  className="search-result-item"
                  key={item.id}
                >
                  <h4 className="search-item-category">{item.category_name}</h4>
                  <h4 className="search-item-name">{item.name}</h4>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
