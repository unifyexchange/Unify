
import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';
import SchoolInfoContainer from './../school_info/school_info_container';
import CategorySelectContainer from './../category_select/category_select_container';
import RecentItemsContainer from './../recent_items/recent_items_container';
import './styles.scss';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleDownArrowClick = this.handleDownArrowClick.bind(this);
  }

  handleDownArrowClick = () => {
    const element = document.getElementById("recent-items-container-baseline");
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const renderLanding = () => (
      <div>
        <SchoolInfoContainer />
        <br className="home-break-line" />
        <CategorySelectContainer />
        <div className="home-down-arrow-container">
          <img
            onClick={() => this.handleDownArrowClick()}
            className="home-down-arrow animated fadeInDown delay-1s"
            src="http://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png"
          />
        </div>
        <br className="home-break-line" />
        <div id="recent-items-container-baseline">
          <RecentItemsContainer/>
        </div>
      </div>
    );

    return (
      <div>
        <div className="main-content-section">{renderLanding()}</div>
        <UserFavoriteItemsContainer />
      </div>
    );
  }
}

export default Home;
