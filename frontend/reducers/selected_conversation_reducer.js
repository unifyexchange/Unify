import { RECEIVE_SELECTED_CONVERSATION } from "./../actions/conversation_actions";

const selectedConversationReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SELECTED_CONVERSATION:
      let newState = action.conversation;
      return newState;
    default:
      return state;
  }
};

export default selectedConversationReducer;
