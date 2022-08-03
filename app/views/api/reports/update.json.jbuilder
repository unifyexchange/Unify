json.report do
    json.extract! @report, :title, :id, :body, :ticket, :user_id, :seller_name, :product_id, :status, :product_name, :created_at, :updated_at
end