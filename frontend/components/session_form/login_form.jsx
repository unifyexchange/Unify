import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value.trim(),
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="error-section">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="img-container">
          <img
            className="login-image"
            src="https://i.ibb.co/LYcZSBt/login-cover.png"
            alt="A plain green background"
          />
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label className="login-header">Welcome back to Unify.</label>
          <br />
          <p className="dont-have-an-account-link">
            Don't have an account? {this.props.navLink}
          </p>
          <div className="login-form">
            <br />
            <label className="email-text">
              Email Address:
              <input
                type="text"
                value={this.state.email_address}
                onChange={this.update("email_address")}
                className="login-input"
              />
            </label>
            <br />
            <label className="password-text">
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            {this.renderErrors()}
            <br />
            <input className="login-submit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
