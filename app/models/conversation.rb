# == Schema Information
#
# Table name: conversations
#
#  id           :bigint           not null, primary key
#  recipient_id :integer
#  sender_id    :integer
#  item_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Conversation < ApplicationRecord
  validates :sender_id, uniqueness: { scope: :recipient_id }

  has_many :messages

  belongs_to :sender, foreign_key: :sender_id, class_name: "User"
  belongs_to :recipient, foreign_key: :recipient_id, class_name: "User"
  belongs_to :item

  def opposed_user(user)
    user == recipient ? sender : recipient
  end

  def sender_name
    self.sender.first_name + " " + self.sender.last_name
  end

  def recipient_name
    self.recipient.first_name + " " + self.recipient.last_name
  end

  def item_name
    self.item.name
  end
  
  def item_image_url
    self.item.image_urls.first
  end
end
