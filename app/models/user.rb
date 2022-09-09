# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string
#  last_name       :string
#  school_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :email_address, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  # validates_uniqueness_of :email_address, :case_sensitive => false 
  

  after_initialize :ensure_session_token

  has_many :favorites, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :conversations, foreign_key: :sender_id

  belongs_to :school

  def school_url
    self&.school.logo_image_url
  end

  def school_location
    self&.school.location
  end

  def school_size
    self&.school.institution_size
  end


  def self.find_by_credentials(email_address, password)
     user = User.find_by("lower(email_address) = ?", email_address.downcase)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!

    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end

    self.session_token
  end
end
