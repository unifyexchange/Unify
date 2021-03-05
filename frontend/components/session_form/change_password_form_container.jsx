import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { changePassword } from "../../actions/session_actions";
import ChangePasswordForm from "./change_password_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (payload) => dispatch(changePassword(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
