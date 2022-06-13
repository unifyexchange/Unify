import { connect } from "react-redux";
import { selectCategory } from "../../actions/category_actions";
import CategoryItems from "./category_items";
import { fetchAllCategoryItems } from "../../actions/item_actions";

const mapStateToProps = (
  { session, entities: { users, selectedCategory, categoryItems } },
  ownProps
) => {
  return {
    currentUser: users[session.id],
    selectedCategory: selectedCategory,
    categoryName: ownProps.match.params.categoryId,
    categoryItems: Object.values(categoryItems),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => {
      return dispatch(selectCategory(category));
    },
    fetchAllCategoryItems: (category) => {
      return dispatch(fetchAllCategoryItems(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);
