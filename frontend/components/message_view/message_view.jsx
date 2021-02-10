import React from "react";

import "./styles.scss";

class MessageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedConversation !== nextProps.selectedConversation) {
      this.props.fetchAllMessages(nextProps.selectedConversation.id);
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.messageText === "") {
      return;
    }

    const message = {
      user_id: this.props.currentUser.id,
      body: this.state.messageText,
      conversation_id: this.props.selectedConversation.id,
    };
    this.props.addMessage(message);

    this.setState({
      messageText: "",
    });
  }

  render() {
    const { selectedConversation } = this.props;

    const chatBubbleView = () => (
      <ul className="chat-message-section">
        {this.props.messages.map((message) => {
          return (
            <li
              className={
                "chat-message-bubble" +
                (parseInt(message.user_id) ===
                parseInt(this.props.currentUser.id)
                  ? " gray-selected"
                  : "")
              }
            >
              <div className="chat-bubble-meta-content">
                <p className="chat-bubble-author">{message.user_name}</p>
                <p className="chat-bubble-time-sent">{message.time_sent}</p>
              </div>
              <div className="chat-message-bubble-body-content">
                <h4 className="chat-message-bubble-body">{message.body}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    );

    const messageView = () => (
      <div>
        {this.props.messages && this.props.messages.length > 0
          ? chatBubbleView()
          : null}
        <div className="send-message-section">
          <div className="message-form-box">
            <input
              type="text"
              value={this.state.messageText}
              onChange={this.update("messageText")}
              className="message-form-input"
              placeholder="Send a message"
            />
            <img
              className="upload-message-icon"
              src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fsend-button.png?alt=media&token=1f3d18ce-9869-415e-ad6b-efcf24446a3b"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );

    const emptyMessageView = () => (
      <div className="empty-message-view-section">
        <img
          className="empty-message-icon"
          src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fspeech-bubble.png?alt=media&token=a2d48c9f-c64c-4387-bf9e-e4e383020351"
        />
        <h3 className="empty-message-text">
          Select a conversation on the left to start messaging
        </h3>
      </div>
    );

    return (
      <div className="message-view-content">
        {Object.values(selectedConversation).length > 0
          ? messageView()
          : emptyMessageView()}
      </div>
    );
  }
}

export default MessageView;
