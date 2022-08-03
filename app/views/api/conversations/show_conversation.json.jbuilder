json.set! @conversation.id do
  json.extract! @conversation, :id, :recipient_id, :sender_id, :item_id, :created_at, :updated_at, :sender_name, :recipient_name, :item_name, :item, :item_image_url
end