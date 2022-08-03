import { connect } from "react-redux";

import {
  addFavorite,
  deleteFavorite,
  fetchAllFavorites,
} from "../../actions/favorite_actions";
import {
  fetchAllFavoriteItems,
  fetchItem,
  deleteItem,
} from "../../actions/item_actions";
import { createConversation } from "./../../actions/conversation_actions";
import ItemShow from "./item_show";

const mapStateToProps = (
  { session, entities: { items, item, users, favoriteItems, favorites } },
  ownProps
) => {
  const itemId = parseInt(ownProps.match.params.itemId);

  return {
    item: item,
    itemId: itemId,
    favoriteItems: Object.values(favoriteItems),
    currentUser: users[session.id],
    items: Object.values(items),
    favorites: Object.values(favorites),
    isLoading: item.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (itemId) => {
      return dispatch(addFavorite(itemId));
    },
    fetchCurrentItem: (itemId) => {
      return dispatch(fetchItem(itemId));
    },
    deleteFavorite: (itemId) => {
      return dispatch(deleteFavorite(itemId));
    },
    fetchAllFavoriteItems: () => {
      return dispatch(fetchAllFavoriteItems());
    },
    fetchAllFavorites: () => {
      return dispatch(fetchAllFavorites());
    },
    deleteItem: (user_id, itemId, history) => {
      return dispatch(deleteItem(user_id, itemId, history));
    },
    createConversation: (conversation) => {
      return dispatch(createConversation(conversation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
