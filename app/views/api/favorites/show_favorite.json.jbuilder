json.set! @favorite.id do
  json.extract! @favorite, :item_id, :id
end