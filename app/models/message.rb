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

class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  def user_name
    self.user.first_name
  end

  def time_sent
    self.created_at.strftime("%I:%M%p")
  end
end
