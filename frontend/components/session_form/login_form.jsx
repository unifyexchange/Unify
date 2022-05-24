import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./styles.scss";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../../src/graph";
import { loginRequest } from "../../../src/config";
import {MsSignInButton} from "./ms_login_button"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: ""
      //password: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.forgotPassword = false
    this.hasSubmitted = false
  }

  // update(field) {
  //   return (e) =>
  //     this.setState({
  //       [field]: e.currentTarget.value.trim(),
  //     });
      
  // }

  update(email) {
    return (e) =>
      this.setState({
        email_address: email,
      }.then(this.handleSubmit()));
      
  }

  forgotPasswordTapped = () => {
    this.forgotPassword = true
    this.hasSubmitted = true


    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", `/api/sendForgotPasswordEmail`, true);
    // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://google.com');
    // xhr.send(JSON.stringify({
    //     email: this.state.email_address
    // }));

    $.ajax({
      url: `/api/sendForgotPasswordEmail`,
      method: "POST",
      data: { email: this.state.email_address.toLowerCase() },
    });

    
    this.setState( {email_address: this.state.email_address, password: this.state.password} )

    }
  
  handleSubmit(e) {
    this.hasSubmitted = true
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    console.log(this.hasSubmitted, this.props.errors)
    if (this.hasSubmitted) {
      if (this.forgotPassword) {
        return (
          <ul className="error-section">
              <li key={`forgot-psw`}>Please check your email to change your password</li>
          </ul>
        );
      }
      return (
        <ul className="error-section">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return (<ul className="error-section">
        <li key={`error-${1}`}></li>
      </ul>)
    }
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

          <br/>
          <Button variant="link" onClick={this.forgotPasswordTapped}>Forgot password?</Button>
          <br/>

            <br />
            {this.renderErrors()}
            <br />
            <input className="login-submit" type="submit" value="Login" />
            
            {/* <button onClick={() => handleLogin(instance)}>Sign in using Popup</button> */}
          </div>
        </form>
        
        <MsSignInButton  func={this.update}/>
      </div>
    );
  }
}

export default withRouter(LoginForm);
