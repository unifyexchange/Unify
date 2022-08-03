@favorite_items.each do |item|
  json.set! item.id do
      json.extract! item, :id, :description, :price, :subtitle, :name, :user_id, :image_urls, :category_name, :condition_name, :seller_name, :seller_name, :created_at
  end
end