# == Schema Information
#
# Table name: schools
#
#  id               :bigint           not null, primary key
#  motto            :string
#  nickname         :string
#  year_established :integer
#  logo_image_url   :string
#  name             :string           not null
#  website          :string
#  description      :text
#  phone            :string
#  institution_size :integer
#  shortname        :string
#  location         :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class School < ApplicationRecord
  has_many :users
  has_many :items, dependent: :destroy
end
