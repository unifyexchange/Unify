import ReportForm from "./report_form";
import { connect } from "react-redux";
//import { addItem } from "./../../actions/";
import { createReport, fetchReportItem } from "./../../actions/report_action";

const mapStateToProps = (state, ownProps) => {
  const itemId = parseInt(ownProps.match.params.id);
  const itemDetail =
    ownProps.history.location.item === undefined
      ? state.entities.reports.item
      : ownProps.history.location.item;
  return {
    item: itemDetail,
    itemId: itemId,
    errors: state.errors.item,
    currentUser: state.entities.users[state.session.id],
    items: state.entities.items,
    isLoading: state.entities.reports.isLoading,
    showSuccessModal: state.entities.showSuccessModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createReport: (user) => dispatch(createReport(user)),
  fetchCurrentItem: (itemId) => dispatch(fetchReportItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
