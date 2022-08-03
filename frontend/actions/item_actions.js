import * as APIUtil from "../util/item_api_util";
import { toggleSuccessModalOn } from "./success_modal_actions";
export const RECEIVE_CURRENT_ITEM = "RECEIVE_CURRENT_ITEM";
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";
export const DELETE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";
export const RECEIVE_ALL_LISTED_ITEMS = "RECEIVE_ALL_LISTED_ITEMS";
export const RECEIVE_ALL_FAVORITE_ITEMS = "RECEIVE_ALL_FAVORITE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const RECEIVE_ALL_CATEGORY_ITEMS = "RECEIVE_ALL_CATEGORY_ITEMS";
export const IS_LOADING = "IS_LOADING";
import { successAlert, failedAlert } from "../util/alerts";

export const receiveAllListedItems = (items) => {
  return {
    type: RECEIVE_ALL_LISTED_ITEMS,
    items: items,
  };
};

export const isLoading = () => {
  return {
    type: IS_LOADING,
  };
};

export const receiveAllFavoriteItems = (items) => {
  return {
    type: RECEIVE_ALL_FAVORITE_ITEMS,
    items: items,
  };
};

export const receiveAllCategoryItems = (items) => {
  return {
    type: RECEIVE_ALL_CATEGORY_ITEMS,
    items: items,
  };
};

export const receiveAllItems = (items) => {
  return {
    type: RECEIVE_ALL_ITEMS,
    items: items,
  };
};

export const receiveCurrentItem = (item) => {
  return {
    type: RECEIVE_CURRENT_ITEM,
    item: item,
  };
};

export const removeCurrentItem = (item) => {
  return {
    type: REMOVE_CURRENT_ITEM,
    item: item,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ITEM_ERRORS,
    errors,
  };
};

// thunk action creators

export const addItem = (item) => {
  return (dispatch) => {
    return APIUtil.createItem(item).then(
      (item) => {
        dispatch(receiveCurrentItem(item));
        dispatch(toggleSuccessModalOn());
      },
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const editItem = (item) => {
  return (dispatch) => {
    return APIUtil.editItem(item).then(
      (item) => {
        dispatch(toggleSuccessModalOn());
      },
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const deleteItem = (userId, itemId, history) => {
  return (dispatch) => {
    dispatch(isLoading());
    var navigate = history;
    return APIUtil.deleteItem(userId, itemId).then(
      (val) => {
        dispatch(isLoading());
        successAlert("Item was successfully deleted");
        navigate.push("/home");
      },
      (err) => {
        dispatch(isLoading());
        failedAlert("An error occured deleting item, please try again");
      }
    );
  };
};


export const fetchAllItems = () => {
  return (dispatch) => {
    return APIUtil.fetchAllItems().then((res) => {
      return dispatch(receiveAllItems(res));
    });
  };
};

export const fetchAllListedItems = () => {
  return (dispatch) => {
    return APIUtil.fetchListedItems().then((res) => {
      return dispatch(receiveAllListedItems(res));
    });
  };
};

export const fetchAllFavoriteItems = () => {
  return (dispatch) => {
    return APIUtil.fetchFavoriteItems().then((res) => {
      return dispatch(receiveAllFavoriteItems(res));
    });
  };
};

export const fetchAllCategoryItems = (category) => {

  return (dispatch) => {
    return APIUtil.fetchCategoryItems(category).then((res) => {
      dispatch(receiveAllCategoryItems(res));
    });
  };
};

export const fetchItem = (itemId) => {
  return (dispatch) => {
    return APIUtil.fetchCurrentItem(itemId).then((item) => {
      return dispatch(receiveCurrentItem(item));
    });
  };
};

export const deleteCurrentItem = (user_id, itemId) => {
  return (dispatch) => {
    return APIUtil.deleteItem(user_id, itemId).then((res) => {
      return dispatch(removeCurrentItem(res));
    });
  };
};
