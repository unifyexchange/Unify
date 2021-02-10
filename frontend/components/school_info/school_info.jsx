import React from "react";

import "./styles.scss";

class SchoolInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="school-info-section">
        <div className="school-img-container">
          <img className="school-info-img" src={currentUser.school_url}></img>
        </div>
        <div className="school-info-data">
          Location: {currentUser.school_location}
          <br />
          Institution size: {currentUser.school_size}
        </div>
      </div>
    );
  }
}

export default SchoolInfo;
