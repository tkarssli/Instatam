json.extract! user, :id, :username, :email, :full_name, :avatar
json.postIds user.post_ids
json.followIds user.follow_ids
json.followerIds user.follower_ids