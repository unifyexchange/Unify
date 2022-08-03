import {
  TOGGLE_SUCCESS_MODAL_ON,
  TOGGLE_SUCCESS_MODAL_OFF,
} from "./../actions/success_modal_actions";

const showSuccessModalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SUCCESS_MODAL_OFF:
      let offState = false;
      return offState;
    case TOGGLE_SUCCESS_MODAL_ON:
      let onState = true;
      return onState;
    default:
      return state;
  }
};

export default showSuccessModalReducer;
