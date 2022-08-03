class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(conversation_id: conversation_params[:conversation_id])
    render "api/messages/index"
  end

  def create
    @message = Message.create(message_params)
    @messages = Message.where(conversation_id: message_params[:conversation_id])

    render "api/messages/index"
  end

  def message_params
    params.require(:message).permit(:conversation_id, :body, :user_id)
  end

  def conversation_params
    params.permit(:conversation_id)
  end
end 