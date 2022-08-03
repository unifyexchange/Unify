import {
  RECEIVE_SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
} from "./../actions/category_actions";

const selectedCategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_CATEGORY:
      let newState = action.category;
      return newState;
    case REMOVE_SELECTED_CATEGORY:
      let blankState = {};
      return blankState;
    default:
      return state;
  }
};

export default selectedCategoryReducer;
