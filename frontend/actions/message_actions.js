import * as APIUtil from "../util/message_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages: messages,
  };
};

// thunk action creators

export const addMessage = (message) => {
  return (dispatch) => {
    return APIUtil.createMessage(message).then((messages) => {
      dispatch(receiveAllMessages(messages));
    });
  };
};

export const fetchAllMessages = (conversationId) => {
  return (dispatch) => {
    return APIUtil.fetchAllMessages(conversationId).then((messages) => {
      return dispatch(receiveAllMessages(messages));
    });
  };
};
