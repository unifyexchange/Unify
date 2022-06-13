import {
  RECEIVE_ITEM_ERRORS,
  RECEIVE_CURRENT_ITEM,
} from "../actions/item_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_ITEM:
      return [];
    default:
      return state;
  }
};
