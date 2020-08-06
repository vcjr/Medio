# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  short_bio       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token
  before_save :grab_profile_image

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.password_digest)
    bcrypt_password.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def grab_profile_image
    profile_image = File.open('app/assets/images/profile-image.jpg')
    self.profile_picture.attach(io: profile_image, filename: "#{self.name}_profile_image.jpg")

  end

  has_many :stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Story

  has_one_attached :profile_picture

end
