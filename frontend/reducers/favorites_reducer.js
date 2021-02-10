import merge from "lodash/merge";

import {
  RECEIVE_CURRENT_FAVORITE,
  RECEIVE_ALL_FAVORITES,
  REMOVE_CURRENT_FAVORITE,
} from "./../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return merge({}, state, action.favorites);
    case RECEIVE_CURRENT_FAVORITE:
      return merge({}, state, action.favorite);
    case REMOVE_CURRENT_FAVORITE:
      let newState = Object.assign({}, state);
      delete newState[Object.values(action.favorite)[0].id];
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
