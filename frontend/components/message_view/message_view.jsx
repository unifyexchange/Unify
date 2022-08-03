import React from "react";
import { formatDate } from "../../util/formatDate";
import "./styles.scss";
import  firebase  from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'
require('firebase/firestore')
require('firebase/storage')

class MessageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: "",
    };

    // this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
  this.scrollToBottom()
}
componentDidUpdate() {
  this.scrollToBottom()
}

scrollToBottom = () => {
  if (this.messagesEnd)
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}

  componentWillReceiveProps(nextProps) {
    console.log("will recieve props", nextProps);
  }


  userTyping = (e) => {
  e.keyCode === 13 ? this.handleSubmit(e) : this.setState({ messageText: e.target.value });
  }
  


  handleSubmit(e) {
    e.preventDefault();
    const {messageText} = this.state;
  
    if (messageText && messageText.replace(/\s/g, '').length) {
          //Message is valid
        const message = {senderID: this.props.currentUser.id, message: messageText, timestamp: Date.now()};
        this.sendMessage(this.props.selectedConversation, message);


        this.setState({
          messageText: "",
        });

        document.getElementById('message-form').value = '';

    }
  }

  sendMessage = async (conversation, message) => {
    const conversationKey = conversation.id
    await firebase.firestore().collection('conversations').doc(conversationKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(message),
        recipientHasRead: false,
        lastTimeStamp: Date.now(),
        item: conversation.item
      });
  }

  render() {
    const { selectedConversation } = this.props;

    

    const chatBubbleView = () => (
      <ul className="chat-message-section" id="chat-message-section">
        {this.props.selectedConversation.messages.map((message, index) => {
          return (
            <li
              key = {index}
              className={
                "chat-message-bubble" +
                (parseInt(message.senderID) !==
                parseInt(this.props.currentUser.id)
                  ? " gray-selected"
                  : "")
              }
            >
              <div className="chat-bubble-meta-content">
                <p className="chat-bubble-author">{this.getAuthor(this.props.selectedConversation, message).name}</p>
                <p className="chat-bubble-time-sent">{formatDate(new Date(message.timestamp))}{" "}</p>
              </div>
              <div className="chat-message-bubble-body-content">
                <h4 className="chat-message-bubble-body">{message.message}</h4>
              </div>
            </li>
          );
        })}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </ul>

      
    );

    const messageView = () => (
      <div>
        {this.props.selectedConversation.messages 
          ? chatBubbleView()
          : null}
        <div className="send-message-section">
          <div className="message-form-box">
            <input
              id="message-form"
              type="text"
              onKeyUp={(e) => this.userTyping(e)}
              className="message-form-input"
              placeholder="Send a message"
            />
            <img
              className="upload-message-icon"
              src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2FsendMsg.png?alt=media&token=2ff5cb81-4fad-4e6f-804b-654cf2e12f08"
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
          src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2Fspeechbub-removebg-preview.png?alt=media&token=2d5fcbbf-c765-4fbf-8dea-6909def19469"
        />
        <h3 className="empty-message-text">
          Select a conversation on the left to start messaging
        </h3>
      </div>
    );

    return (
      <div className="message-view-content"> {console.log("VIEW CONTENT:", selectedConversation)}
        {
        selectedConversation && (typeof selectedConversation.messages != "undefined")
          ? messageView()
          : emptyMessageView()}
      </div>
    );
  }



  getAuthor = (conversation, message) => {
    return conversation.users.filter(usr => usr.id === message.senderID)[0]
  }

}

export default MessageView;
