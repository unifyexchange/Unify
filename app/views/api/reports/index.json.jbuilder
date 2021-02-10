

json.page do
    json.totalpage @total
end
json.reports do
json.array! @reports.each, :title, :id, :body, :ticket, :user_id, :seller_name, :product_id, :status, :product_name, :created_at, :updated_at
end