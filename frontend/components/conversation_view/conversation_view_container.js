import { connect } from "react-redux";
import {
  fetchAllConversations,
  createConversation,
  removeConversation,
  selectConversation,
} from "./../../actions/conversation_actions";
import ConversationView from "./conversation_view";

const mapStateToProps = ({
  session,
  entities: { users, conversations, selectedConversation },
}) => {
  return {
    currentUser: users[session.id],
    conversations: Object.values(conversations),
    selectedConversation: selectedConversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllConversations: () => {
      return dispatch(fetchAllConversations());
    },
    removeConversation: (conversationId) => {
      return dispatch(removeConversation(conversationId));
    },
    createConversation: (conversation) => {
      return dispatch(createConversation(conversation));
    },
    selectConversation: (conversation) => {
      return dispatch(selectConversation(conversation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView);
