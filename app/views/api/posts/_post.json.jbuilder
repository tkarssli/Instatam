json.extract! post, :id, :caption, :user_id
json.photo_url url_for(post.photo)