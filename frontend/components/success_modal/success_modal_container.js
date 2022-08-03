import SuccessModal from "./success_modal";
import { connect } from "react-redux";
import { toggleModalOff } from "./../../actions/success_modal_actions";

const mapStateToProps = (state) => {
  return {
    showSuccessModal: state.entities.showSuccessModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModalOff: () => {
      return dispatch(toggleModalOff());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);
