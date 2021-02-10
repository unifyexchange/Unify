# == Schema Information
#
# Table name: messages
#
#  id              :bigint           not null, primary key
#  body            :text
#  user_id         :bigint
#  conversation_id :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
