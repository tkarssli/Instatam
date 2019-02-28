# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  caption    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :user_id, presence: true
end
