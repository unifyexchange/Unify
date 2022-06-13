import ReportList from "./report_list";
import { connect } from "react-redux";
import {
  fetchReportList,
  updateReportStatus,
  searchByTicketId,
} from "./../../actions/report_action";

const mapStateToProps = (state, ownProps) => {
  return {
    report: state.entities.reports.report ? state.entities.reports.report : [],
    errors: state.errors.item,
    currentUser: state.entities.users[state.session.id],
    isLoading: state.entities.reports.isLoading,
    totalPage: state.entities.reports.totalPageCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReportList: (page) => {
      return dispatch(fetchReportList(page));
    },
    updateReportStatus: (val) => {
      return dispatch(updateReportStatus(val));
    },
    searchByTicketId: (val) => {
      return dispatch(searchByTicketId(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
