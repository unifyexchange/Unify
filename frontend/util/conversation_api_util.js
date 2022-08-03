export const fetchConversations = () => {
  return $.ajax({
    url: `/api/conversations`,
    method: "GET",
  });
};

export const createConversation = (conversation) => {
  return $.ajax({
    url: `/api/conversations`,
    method: "POST",
    data: { conversation: conversation },
  });
};

export const removeConversation = (conversationId) => {
  return $.ajax({
    url: `api/user/conversations/${conversationId}`,
    method: "DELETE",
  });
};
