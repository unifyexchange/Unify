import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const msLogin = (user) => {
  return (dispatch) => {
    return APIUtil.msLogin(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const changePassword = (payload) => {
  return (dispatch) => {
    return APIUtil.changePassword(payload).then(
   
      (email_address) => {
        // console.log("finished API")
        // console.log(email_address)
        // const user = {
        //   email_address: email_address,
        //   password: payload.password,
        // }
        // return dispatch(receiveCurrentUser(user));
        return null;
      },
      (err) => {
        console.log(err.status)
        if (err.status == 200) {

          const user = {
            email_address: err.responseText,
            password: payload.password,
          }
          dispatch(receiveCurrentUser(user))
          
          return dispatch(login(user));
        } else {
          return dispatch(receiveErrors(["Forbidden"]));
        }
        
      }
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then((user) => {
      return dispatch(logoutCurrentUser());
    });
  };
};
