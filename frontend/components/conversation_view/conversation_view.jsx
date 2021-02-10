import React from "react";
import MessageViewContainer from "./../message_view/message_view_container";
import ItemDetail from "./../item_detail/item_detail";
import { formatDate } from "../../util/formatDate";
import "./styles.scss";

class ConversationView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    const { conversations, currentUser, selectedConversation } = this.props;

    return (
      <div className="messages-content-section">
        <ul className="conversation-view-section">
          <div className="conversation-view-wrapper">
            {conversations.map((conversation) => {
              return (
                <li
                  key={conversation.id}
                  className={
                    "conversation-section-row" +
                    (selectedConversation &&
                    parseInt(selectedConversation.id) ===
                      parseInt(conversation.id)
                      ? " green-selected"
                      : "")
                  }
                  onClick={() => this.props.selectConversation(conversation)}
                >
                  <img
                    className="conversation-row-img"
                    src={conversation.item_image_url}
                  />
                  <div className="conversation-row-txt">
                    <h2 className="conversation-row-name">
                      {parseInt(currentUser.id) === conversation.sender_id
                        ? conversation.recipient_name
                        : conversation.sender_name}
                    </h2>
                    <h4 className="conversation-row-date">
                      {formatDate(new Date(conversation.updated_at))}{" "}
                    </h4>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="message-view-section">
          <MessageViewContainer />
        </div>
        <div className="conversation-item-view-section">
          <ItemDetail item={selectedConversation.item} />
        </div>
      </div>
    );
  }
}

export default ConversationView;
