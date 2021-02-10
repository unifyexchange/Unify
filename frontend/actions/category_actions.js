import * as APIUtil from "../util/category_api_util";

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_SELECTED_CATEGORY = "RECEIVE_SELECTED_CATEGORY";
export const REMOVE_SELECTED_CATEGORY = "REMOVE_SELECTED_CATEGORY";

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories: categories,
  };
};

export const receiveSelectedCategory = (category) => {
  return {
    type: RECEIVE_SELECTED_CATEGORY,
    category: category,
  };
};

export const removeCategory = () => {
  return {
    type: REMOVE_SELECTED_CATEGORY,
  };
};

// thunk action creators

export const fetchAllCategories = () => {
  return (dispatch) => {
    return APIUtil.fetchCategories().then((res) => {
      return dispatch(receiveAllCategories(res));
    });
  };
};

export const selectCategory = (category) => {
  return (dispatch) => {
    return dispatch(receiveSelectedCategory(category));
  };
};

export const removeSelectedCategory = () => {
  return (dispatch) => {
    return dispatch(removeCategory());
  };
};
