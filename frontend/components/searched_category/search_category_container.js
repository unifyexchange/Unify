import ReportList from "./search_category";
import { connect } from "react-redux";
import { fetchMostSearchCategory } from "../../actions/report_action";

const mapStateToProps = (state, ownProps) => {
  return {
    searches: state.entities.reports.searches
      ? state.entities.reports.searches
      : [],
    errors: state.errors.item,
    currentUser: state.entities.users[state.session.id],
    isLoading: state.entities.reports.isLoading,
    totalPage: state.entities.reports.totalPageCountCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMostSearchCategory: (page) => {
      return dispatch(fetchMostSearchCategory(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
