# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  full_name       :string           not null
#  avatar          :string
#

class User < ApplicationRecord
    attr_reader :password
    validates :username, :email, :session_token, uniqueness: true, presence: true 
    validates :password_digest, :full_name, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            return @user
        else
            nil
        end
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64()
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64()
        self.save!
        return self.session_token
    end

    has_many :posts
    has_many :comments
    has_many :likes
    has_many :liked_posts, 
        through: :likes,
        source: :post
    
end
