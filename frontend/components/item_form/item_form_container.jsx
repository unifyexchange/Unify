/* eslint-disable arrow-body-style */
import ItemForm from "./item_form";
import { connect } from "react-redux";
import { addItem } from "./../../actions/item_actions";
import { receiveCurrentUser } from "./../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.item,
    currentUser: state.entities.users[state.session.id],
    items: state.entities.items,
    showSuccessModal: state.entities.showSuccessModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
