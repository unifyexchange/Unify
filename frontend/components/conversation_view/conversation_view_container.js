import { connect } from "react-redux";
import {
  fetchAllConversations,
  createConversation,
  removeConversation,
  selectConversation,
  updateConversationsV2,
} from "./../../actions/conversation_actions";
import ConversationView from "./conversation_view";

const mapStateToProps = ({
  session,
  entities: { users, conversations, conversationsV2, selectedConversation },
}) => {
  return {
    currentUser: users[session.id],
    conversations: Object.values(conversations),
    selectedConversation: selectedConversation,
    conversationsV2: Object.values(conversationsV2),
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
    updateConversationsV2: (conversations) => {
      return dispatch(updateConversationsV2(conversations));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView);
