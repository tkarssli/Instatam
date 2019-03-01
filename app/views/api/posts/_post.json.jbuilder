json.extract! post, :id, :caption, :user_id

json.photoUrl url_for(post.photo)