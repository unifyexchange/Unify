import { connect } from "react-redux";
import UserFavoriteItemsIndex from "./user_favorite_items_index";
import {
  fetchAllListedItems,
  fetchAllFavoriteItems,
} from "../../actions/item_actions";

const mapStateToProps = ({
  session,
  entities: { users, listedItems, favoriteItems, favorites },
}) => {
  return {
    currentUser: users[session.id],
    listedItems: listedItems.listedItems,
    favoriteItems: Object.values(favoriteItems),
    favorites: Object.values(favorites),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllListedItems: () => {
      return dispatch(fetchAllListedItems());
    },
    fetchAllFavoriteItems: () => {
      return dispatch(fetchAllFavoriteItems());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFavoriteItemsIndex);
