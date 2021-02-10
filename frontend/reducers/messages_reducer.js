import { RECEIVE_ALL_MESSAGES } from "./../actions/message_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      let newState = action.messages;
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
