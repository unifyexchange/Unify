import { RECEIVE_ALL_CATEGORY_ITEMS } from "./../actions/item_actions";

const categoryItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORY_ITEMS:
      let newState = Object.assign({}, action.items);
      return newState;
    default:
      return state;
  }
};

export default categoryItemsReducer;
