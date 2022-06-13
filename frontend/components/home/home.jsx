
import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';
import SchoolInfoContainer from './../school_info/school_info_container';
import CategorySelectContainer from './../category_select/category_select_container';
import RecentItemsContainer from './../recent_items/recent_items_container';
import ProfileContent from './profileContent';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
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
            src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2F58f8bcf70ed2bdaf7c128307.png?alt=media&token=28fb1723-50e9-4371-894f-3d70b63411c0"
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
        <ProfileContent />
      </div>
    );
  }
}

export default Home;
