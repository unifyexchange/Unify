import React from "react";
import { withRouter } from "react-router-dom";
import { intro, termsOfUse } from "./terms_of_use";
import "./styles.scss";

class TermsOfService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList.add("no-scroll");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }

  render() {
    return (
      <div className="terms-of-service-container">
        <div className="img-container">
          <img
            className="bg-image"
            src="https://i.ibb.co/LYcZSBt/login-cover.png"
            alt="A plain green background"
          />
        </div>
        <div className="terms-of-service-box">
          <h1 className="terms-of-service-header">Terms of Service</h1>
          <br />
          <div className="term-of-service-body">
            <div className="terms-of-service-intro">
              {intro} <br></br>
              {termsOfUse.map((term) => {
                return (
                  <div className="term-details">
                    <div className="term-header">
                      <div class="term-title-bold">
                        {`${term.no} ${term.title}`}
                      </div>
                    </div>
                    {(term.subItem || (term.subHeader && !term.subItem)) && (
                      <div>
                        <span className="term-title-semibold">
                          {term.subHeader}
                        </span>
                      </div>
                    )}
                    {term.description}
                    {term.break && (
                      <div>
                        <br />
                        <br />
                      </div>
                    )}
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TermsOfService);
