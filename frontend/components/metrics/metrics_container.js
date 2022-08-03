import ReportList from "./metrics";
import { connect } from "react-redux";
import { fetchMetrics } from "./../../actions/report_action";

const mapStateToProps = (state, ownProps) => {
  return {
    metrics: state.entities.reports.metrics,
    currentUser: state.entities.users[state.session.id],
    isLoading: state.entities.reports.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMetrics: () => {
      return dispatch(fetchMetrics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
