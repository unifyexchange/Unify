class Report < ApplicationRecord

    validates :title, presence: true
    validates :body, presence: true
    validates :ticket, presence: true
    validates :user_id, presence: true
    validates :item_id, presence: true

    belongs_to :user
    belongs_to :item


    def seller_name
        self.user.first_name + " " + self.user.last_name
    end

    def product_name
        self.item.name 
    end

    def product_id
        self.item.id 
    end

end
