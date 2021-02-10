import { connect } from "react-redux";
import CategorySelect from "./category_select";
import {
  fetchAllCategories,
  selectCategory,
} from "../../actions/category_actions";

const mapStateToProps = ({
  session,
  entities: { users, categories, selectedCategory },
}) => {
  return {
    currentUser: users[session.id],
    categories: Object.values(categories),
    selectedCategory: selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => {
      return dispatch(fetchAllCategories());
    },
    selectCategory: (category) => {
      return dispatch(selectCategory(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
