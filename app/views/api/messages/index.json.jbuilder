@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :conversation_id, :user_id, :user_name, :time_sent
  end
end