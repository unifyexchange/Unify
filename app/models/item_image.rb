# == Schema Information
#
# Table name: item_images
#
#  id         :bigint           not null, primary key
#  item_id    :integer          not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ItemImage < ApplicationRecord
  belongs_to :item
end
