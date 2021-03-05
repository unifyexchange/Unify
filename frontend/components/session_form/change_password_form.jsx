import React from "react";
import { withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./styles.scss";

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordAgain: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.hasSubmitted = false

    this.userID = props.match.params.userID

    console.log(props.match.params.userID)
  }

  

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value.trim(),
      });
  }

  forgotPasswordTapped = () => {
    this.forgotPassword = true

    // fetch(`http://localhost:3000/api/sendForgotPasswordEmail/${this.state.email_address}`)
    // .then(res => res.json())
    // .then(
    //   this.update("email_address")
    // )

    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://127.0.0.1:3000/api/sendForgotPasswordEmail`, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://google.com');
    xhr.send(JSON.stringify({
        email: this.state.email_address
    }));

    
    this.setState( {passwordAgain: this.state.passwordAgain, password: this.state.password} )

    }

  handleSubmit(e) {
    this.hasSubmitted = true
    console.log("handling submit")

    if (this.state.password != this.state.passwordAgain) {
        this.setState( {passwordAgain: this.state.passwordAgain, password: this.state.password} )
    } else {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
  }

  renderErrors() {
    console.log(this.hasSubmitted, this.props.errors)
    if (this.hasSubmitted) {
        if (this.state.password != this.state.passwordAgain) {
            return (<ul className="error-section">
            <li key={`error-${1}`}>Passwords do not match</li>
        </ul>)
        }
        
    } 
    return (<ul className="error-section">
        <li key={`error-${1}`}></li>
    </ul>)
    
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
          <label className="login-header">Change your password</label>
          <br />
          <p className="dont-have-an-account-link">
            Don't have an account? {this.props.navLink}
          </p>
          <div className="login-form">
            <br />
            <label className="email-text">
              New password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <label className="password-text">
              New password, again:
              <input
                type="password"
                value={this.state.passwordAgain}
                onChange={this.update("passwordAgain")}
                className="login-input"
              />
            </label>

            <br />
            {this.renderErrors()}
            <br />
            <input className="login-submit" type="submit" value="Confirm" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ChangePasswordForm);
