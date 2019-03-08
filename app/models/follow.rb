# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
    validates :user_id, :follower_id, presence: true
    validates_uniqueness_of :user_id, :scope => [:follower_id]

    belongs_to :user, foreign_key: :user_id
    belongs_to :user, foreign_key: :follower_id

end
