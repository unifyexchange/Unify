import * as APIUtil from "../util/conversation_api_util";

export const RECEIVE_ALL_CONVERSATIONSV2 = "RECEIVE_ALL_CONVERSATIONSV2";
export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";
export const RECEIVE_SELECTED_CONVERSATION = "RECEIVE_SELECTED_CONVERSATION";

export const receiveAllConversations = (conversations) => {
  return {
    type: RECEIVE_ALL_CONVERSATIONS,
    conversations: conversations,
  };
};

export const receiveConversation = (conversation) => {
  return {
    type: RECEIVE_CONVERSATION,
    conversation: conversation,
  };
};

export const receiveSelectedConversation = (conversation) => {
  console.log("recieve SEL 1");
  return {
    type: RECEIVE_SELECTED_CONVERSATION,
    conversation: conversation,
  };
};

export const removeConversation = (conversation) => {
  return {
    type: REMOVE_CONVERSATION,
    conversation: conversation,
  };
};

export const receiveAllConversationsV2 = (conversations) => {
  return {
    type: RECEIVE_ALL_CONVERSATIONSV2,
    conversationsV2: conversations,
  };
};

// thunk action creators
//test

export const fetchAllConversations = () => {
  return (dispatch) => {
    return APIUtil.fetchConversations().then((res) => {
      return dispatch(receiveAllConversations(res));
    });
  };
};

export const createConversation = (conversation) => {
  return (dispatch) => {
    return APIUtil.createConversation(conversation).then((res) => {
      return dispatch(receiveConversation(res));
    });
  };
};

export const removeSelectedConversation = (conversationId) => {
  return (dispatch) => {
    return APIUtil.removeConversation(conversationId).then((res) => {
      return dispatch(removeConversation(conversation));
    });
  };
};

export const selectConversation = (conversation) => {
  
  return (dispatch) => {
    return dispatch(receiveSelectedConversation(conversation));
  };
};


export const updateConversationsV2 = (conversations) => {
  return (dispatch) => {
      return dispatch(receiveAllConversationsV2(conversations));
  };
};