# == Schema Information
#
# Table name: items
#
#  id              :bigint           not null, primary key
#  description     :text             not null
#  price           :float
#  subtitle        :string
#  name            :string           not null
#  user_id         :integer
#  expiration_date :date
#  condition       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  condition_id    :bigint           not null
#  school_id       :bigint           not null
#

class Item < ApplicationRecord

  validates :name, presence: true
  validates :condition, presence: true
  validates :price, presence: true
  validates :user_id, presence: true

  has_many :item_images, dependent: :destroy

  belongs_to :category
  belongs_to :school
  belongs_to :condition
  belongs_to :user

  def category_name
    self.category.name
  end

  def condition_name
    self.condition.name
  end

  def seller_name
    self.user.first_name + " " + self.user.last_name
  end

  def image_urls
    self.item_images.pluck(:image_url)
  end
end
