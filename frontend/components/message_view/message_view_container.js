import { connect } from "react-redux";
import MessageView from "./message_view";

import { fetchAllMessages, addMessage } from "../../actions/message_actions";

const mapStateToProps = ({
  session,
  entities: { users, selectedConversation, messages },
}) => {
  return {
    currentUser: users[session.id],
    selectedConversation: selectedConversation,
    messages: Object.values(messages),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMessages: (conversationId) => {
      return dispatch(fetchAllMessages(conversationId));
    },
    addMessage: (message) => {
      return dispatch(addMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);
