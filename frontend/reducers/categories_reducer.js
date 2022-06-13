import merge from "lodash/merge";

import { RECEIVE_ALL_CATEGORIES } from "./../actions/category_actions";

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, state, action.categories);
    default:
      return state;
  }
};

export default categoriesReducer;
