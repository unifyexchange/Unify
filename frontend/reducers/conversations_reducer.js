import merge from "lodash/merge";

import {
  RECEIVE_CONVERSATION,
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_ALL_CONVERSATIONSV2,
  REMOVE_CONVERSATION,
  
} from "./../actions/conversation_actions";

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, state, action.conversations);
    case RECEIVE_ALL_CONVERSATIONSV2:
      return merge({}, state, action.conversationsV2);
    case RECEIVE_CONVERSATION:
      return merge({}, state, action.conversation);
    case REMOVE_CONVERSATION:
      let newState = Object.assign({}, state);
      delete newState[Object.values(action.conversation)[0].id];
      return newState;
    default:
      return state;
  }
};

export default conversationsReducer;
