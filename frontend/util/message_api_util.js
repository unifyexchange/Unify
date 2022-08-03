export const fetchAllMessages = (conversationId) => {
  return $.ajax({
    url: `/api/messages`,
    method: "GET",
    data: { conversation_id: conversationId },
  });
};

export const createMessage = (message) => {
  return $.ajax({
    url: `api/user/messages`,
    method: "POST",
    data: { message: message },
  });
};
