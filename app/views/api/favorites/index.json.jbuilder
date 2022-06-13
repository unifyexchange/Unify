@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! favorite, :item_id, :id
  end
end
