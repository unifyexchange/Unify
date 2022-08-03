import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class SearchBarWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      item: {},
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
    this.setState({ search: e.target.value.substr(0) });
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

  selectCategory = (e) => {
    e.preventDefault();
 
    const { search } = this.state;
    if (!search) {
      return alert("Please select a category");
    }
    const searchResults = document.getElementsByClassName("search-results")[0];
    searchResults.classList.add("hidden-menu");
    var path =  this.props.history.location.pathname;
    var splittedPath = path.split('/')
    var routeInitial =  splittedPath[1]
    splittedPath.length == 3 && routeInitial == "category" ? this.props.updateItems(search.toLowerCase().trim()) : this.props.history.push(`/category/${search.toLowerCase().trim()}`)
  }
  
  pickItem = (item) =>{
    const searchResults = document.getElementsByClassName("search-results")[0];
    searchResults.classList.toggle("hidden-menu");
    this.setState({ search: item.name });
  };

  render() {
    let filteredItems = this.props.categories.filter((category) => {
      if (
        category.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      ) {
        return category;
      }
    });

    return (
      <div className="search-bar-container">
        <form className="search-bar">
          <div className="search-input-holder">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.updateSearch}
              onClick={this.showSearchResults}
            />
            <ul className="search-results hidden-menu">
              <h4 className="search-result-label">Categories</h4>
              {filteredItems.slice(0, 8).map((item) => {
                return (
                  <li
                    onClick={() => this.pickItem(item)}
                    className="search-result-item"
                    key={item.id}
                  >
                    <h4 className="search-item-category">{item.name}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={(e) => this.selectCategory(e)}
            className="search-input-button"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBarWithButton);
