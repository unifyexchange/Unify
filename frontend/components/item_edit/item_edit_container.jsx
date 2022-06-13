import ItemEditForm from "./item_edit";
import { connect } from "react-redux";
import { editItem, fetchItem } from "./../../actions/item_actions";
import { receiveCurrentUser } from "./../../actions/session_actions";
const mapStateToProps = (state, ownProps) => {
  const itemId = parseInt(ownProps.match.params.itemId);
  return {
    errors: state.errors.item,
    itemId: itemId,
    currentUser: state.entities.users[state.session.id],
    items: state.entities.items,
    showSuccessModal: state.entities.showSuccessModal,
    item: state.entities.item.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (item) => {
      return dispatch(editItem(item));
    },
    receiveCurrentUser: (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    fetchCurrentItem: (itemId) => {
      return dispatch(fetchItem(itemId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditForm);
