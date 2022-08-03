import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class SuccessModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(path) {
    this.props.toggleModalOff();
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="success-modal-section">
        <div className="success-modal-content animated fadeInUp">
          <div className="checkmark-section">
            <img
              className="checkmark-icon animated fadeInUp delay-1s"
              src="https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png"
            />
          </div>
          <h2 className="success-modal-header">Great!</h2>
          <h4 className="success-modal-subtitle">{this.props.message}</h4>
          <button
            className="success-modal-confirm-button"
            onClick={() => this.closeModal(this.props.navigate)}
          >
            {this.props.btnTitle}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SuccessModal);
