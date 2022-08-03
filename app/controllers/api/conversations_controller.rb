class Api::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.where('recipient_id=? OR sender_id=?', current_user.id, current_user.id)
  end

  def create
    @conversation = Conversation.find_or_create_by(sender_id: conversation_params[:sender_id], recipient_id: conversation_params[:recipient_id])
    @conversation.update(item_id: conversation_params[:item_id])

    # create message
    @conversation.messages << Message.create(user_id: conversation_params[:sender_id], body: conversation_params[:body])
    @conversation.save

    render "api/conversations/show_conversation"
  end

  def conversation_params
    params.require(:conversation).permit(:sender_id, :item_id, :body, :recipient_id)
  end
end