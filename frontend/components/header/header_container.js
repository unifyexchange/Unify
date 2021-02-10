import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAllCategoryItems } from "../../actions/item_actions";
import Header from "./header";
import {
  fetchAllCategories,
  selectCategory,
} from "../../actions/category_actions";

const mapStateToProps = ({
  session,
  entities: { users, categories, items },
}) => {
  return {
    categories: Object.values(categories),
    currentUser: users[session.id],
    items: Object.values(items),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      return dispatch(logout());
    },
    selectCategory: (category) => {
      return dispatch(selectCategory(category));
    },
    fetchAllCategoryItems: (category) => {
      return dispatch(fetchAllCategoryItems(category));
    },
    fetchAllCategories: () => {
      return dispatch(fetchAllCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
