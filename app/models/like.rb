# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :post_id, presence: true
    validates_uniqueness_of :user_id, :scope => [:post_id]

    belongs_to :user
    belongs_to :post
end
