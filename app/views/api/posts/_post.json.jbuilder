json.extract! post, :id, :caption, :user_id, :created_at
json.photo_url url_for(post.photo)
json.commentIds post.comment_ids
json.liked_user_ids post.liked_user_ids
