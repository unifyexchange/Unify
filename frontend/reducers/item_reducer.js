import merge from "lodash/merge";

import {
  REMOVE_CURRENT_ITEM,
  RECEIVE_CURRENT_ITEM,
  DELETE_CURRENT_ITEM,
  IS_LOADING
} from "./../actions/item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const initialState = {
  isLoading: false,
  item: {}
}

const itemReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case IS_LOADING:
      return {
          ...state,
          isLoading: true,
        };
    case RECEIVE_CURRENT_ITEM:
      return {
        ...state,
        item: action.item,
        isLoading: false,
      };
    case DELETE_CURRENT_ITEM:
      return merge({}, state, action.items);
    default:
      return state;
  }
};

export default itemReducer;
