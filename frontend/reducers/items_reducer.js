import merge from "lodash/merge";

import {
  RECEIVE_ALL_ITEMS,
  REMOVE_CURRENT_ITEM,
} from "./../actions/item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_ALL_ITEMS:
      return merge({}, state, action.items);
    case REMOVE_CURRENT_ITEM:
      let newState = Object.assign({}, state);
      delete newState[Object.values(action.item)[0].id];
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
