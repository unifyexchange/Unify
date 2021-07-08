import React from "react";
import MessageViewContainer from "./../message_view/message_view_container";
import ItemDetail from "./../item_detail/item_detail";
import { formatDate } from "../../util/formatDate";
import "./styles.scss";
import  firebase  from 'firebase/app';
import selectedConversationReducer from "../../reducers/selected_conversation_reducer";

class ConversationView extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.observeConversations(this.props.currentUser);
  }


  componentWillReceiveProps = (newProps) => {
    if (newProps.selectedConversation.messages) {
      this.markUnreadAndSelectConversation(newProps.selectedConversation);
    }
  }


  render() {
    const {currentUser, selectedConversation, conversationsV2 } = this.props;

    const unreadDot = () => (
       <span className="unreadDot"></span>
    );

    return (
      <div className="messages-content-section">
        <ul className="conversation-view-section">
          <div className="conversation-view-wrapper">
          
            {conversationsV2.sort( (a, b) => (a.lastTimeStamp > b.lastTimeStamp) ? -1 : 1 ).map((conversation, index) => {
              console.log("in map");
              return (
                <li
                
                  key={conversation.id}
                  className={
                    "conversation-section-row" +
                    (selectedConversation &&
                    selectedConversation.id ===
                      conversation.id
                      ? " green-selected"
                      : "")
                  }
                  onClick={() => this.markUnreadAndSelectConversation(conversation)}
                >
                  {this.shouldShowUnreadDot(conversation) ? unreadDot() : null}
                  
                  <img
                    className="conversation-row-img"
                    src={conversation.item.image_urls[0]}
                  />
                  <div className="conversation-row-txt">
                    <h2 className="conversation-row-name">
                      {this.getOtherUser(conversation, currentUser).name}
                    </h2>
                    <h4 className="conversation-row-date">
                      {formatDate(new Date(conversation.lastTimeStamp))}{" "}
                    </h4>
                  </div>
                  
                </li>
              );
            })}
          </div>
        </ul>
        <div className="message-view-section">
          <MessageViewContainer />
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
        </div>
        <div className="conversation-item-view-section">
          <ItemDetail item={selectedConversation.item} />
        </div>
      </div>
    );
  }

  shouldShowUnreadDot = (conversation) => {
    const lastMessage = conversation.messages[conversation.messages.length-1];
    if (lastMessage.senderID !== this.props.currentUser.id) {
      return !conversation.recipientHasRead;
    }
    return false;
    
  }

  markUnreadAndSelectConversation = (conversation) => {
    const lastMessage = conversation.messages[conversation.messages.length-1];

    if ((!conversation.recipientHasRead) && (lastMessage.senderID !== this.props.currentUser.id)) {
        firebase
          .firestore()
          .collection('conversations')
          .doc(conversation.id)
          .update({ recipientHasRead: true });
    }
    this.props.selectConversation(conversation)


  }

  getCurrentUserName = (currentUser) => {
    return `${currentUser.first_name} ${currentUser.last_name}`;
  }

  observeConversations = async (currentUser) => {
    console.log("in observe", currentUser);
    await firebase.firestore().collection("conversations").where('users', 'array-contains', {id: currentUser.id, name: this.getCurrentUserName(currentUser)})
    .onSnapshot(async querySnapshot => {
      var conversations = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("SOCKET RELOADED");
        var conversation = doc.data();
        conversation.id = doc.id;
        conversations.push(conversation);
       });


    console.log(this.props);
    if (this.props.selectedConversation && Object.keys(this.props.selectedConversation).length !== 0) {
      this.props.selectConversation( conversations.filter(convo => convo.id === this.props.selectedConversation.id)[0]       );
    }

    console.log(conversations);
    this.props.updateConversationsV2(conversations);
      





    });
  }

  getOtherUser = (conversation, currentUser) => {
    console.log("getotheruser", conversation);
    return conversation.users.filter(usr => usr.id !== currentUser.id)[0]
  }

  // sortByTimestamp = (a, b) => {
  //   const b = a.lastTimeStamp > b.lastTimeStamp;
  //   return b ? 1 : 0;
  // }





}

export default ConversationView;
