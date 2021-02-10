import merge from "lodash/merge";

import { RECEIVE_ALL_LISTED_ITEMS } from "./../actions/item_actions";

const initialState = {
  listedItems: []
}
const listedItemsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTED_ITEMS:
       return { ...state, listedItems: action.items}
    default:
      return state;
  }
};

export default listedItemsReducer;
