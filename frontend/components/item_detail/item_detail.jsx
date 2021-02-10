import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import { formatDate } from "../../util/formatDate";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const itemDetailView = () => (
      <div className="item-detail-content-view">
        <h2 className="item-detail-header">Item details</h2>
        <div className="item-show-detail-row">
          <h4 className="item-show-detail-row-title">Name</h4>
          <h4 className="item-show-detail-row-value">{item.name}</h4>
        </div>
        <div className="item-show-detail-row">
          <h4 className="item-show-detail-row-title">Condition</h4>
          <h4 className="item-show-detail-row-value">{item.condition.name}</h4>
        </div>

        <div className="item-show-detail-row">
          <h4 className="item-show-detail-row-title">Posted on</h4>
          <h4 className="item-show-detail-row-value">
            {formatDate(new Date(item.created_at))}
          </h4>
        </div>

        <br className="item-detail-break-line" />

        <div className="item-show-description-section">
          <h4 className="item-show-description-title">Description</h4>
          {item.description}
        </div>

        <div className="item-detail-user-input-section">
          <button
            className="item-detail-button"
            onClick={() => this.props.history.push(`/items/${item.id}`)}
          >
            View item
          </button>
        </div>
      </div>
    );

    return (
      <div className="item-detail-content-section">
        {item ? itemDetailView() : null}
      </div>
    );
  }
}

export default withRouter(ItemDetail);
