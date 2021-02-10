import { connect } from "react-redux";

import { addFavorite, deleteFavorite } from "../../actions/favorite_actions";
import { fetchAllFavoriteItems } from "../../actions/item_actions";
import ItemPreview from "./item_preview";

const mapStateToProps = (props, ownProps) => {
  return {
    item: ownProps.item,
    favoriteIds: ownProps.favoriteIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (itemId) => {
      return dispatch(addFavorite(itemId));
    },
    deleteFavorite: (itemId) => {
      return dispatch(deleteFavorite(itemId));
    },
    fetchAllFavoriteItems: () => {
      return dispatch(fetchAllFavoriteItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPreview);
