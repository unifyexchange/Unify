import React from "react";
import { useState} from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class SearchBarWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      item: {},
      searchStyle: {
        display: 'none'
      },
      searchBorderStyle: {
        border: 'white'
      }
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this._handleIconFocus = this._handleIconFocus.bind(this);
    //this._handleIconClick = this._handleIconClick.bind(this);
    //this._handleTextBlur = this._handleTextBlur.bind(this);
  }

  _handleIconFocus(e) {
    e.preventDefault();
    //console.log("hit focus");
    this.setState({
      searchStyle: {
        display: 'inline-block'
      },
      searchBorderStyle: {
        border: '1px solid #e4e4e4'
      }
    })
  }
  
  // _handleTextBlur(e) {
  //   e.preventDefault();
  //   console.log("hit leave");
  //   if (!this._searchBox.value && !this._searchBox.value.length > 0) 
  //     this.setState({
  //       searchboxStyle: {
  //         display: 'none'
  //       }
  //     })
  // }
  
  // _handleIconClick(e) {
  //   e.preventDefault();
  // }

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
    console.log("hit leave");
    if (!this._searchBox.value && !this._searchBox.value.length > 0) 
      this.setState({
        searchStyle: {
          display: 'none'
        },
        searchBorderStyle: {
          border: 'white'
        }
      })
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
        <form className="search-bar" style={this.state.searchBorderStyle}>
          <div className="search-input-holder" style={this.state.searchStyle}>
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              ref={f => this._searchBox = f}
              value={this.state.search}
              onChange={this.updateSearch}
              onClick={this.showSearchResults}
              //onFocus={this._handleIconFocus}
              onBlur={this._handleTextBlur}
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
          <div className="search-input-button">
            <img className="search-icon" src="/images/magnifying_glass.png" alt="magnifying glass" 
              //onClick={(e) => this.selectCategory(e)}
              onMouseEnter={this._handleIconFocus}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBarWithButton);
