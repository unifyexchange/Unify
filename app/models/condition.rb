# == Schema Information
#
# Table name: conditions
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Condition < ApplicationRecord
  has_many :items
end
