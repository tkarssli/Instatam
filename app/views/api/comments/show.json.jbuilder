
defaults = { comment: {}, post: {} }
json.merge! defaults

json.set! "comment" do
    json.partial! 'api/comments/comment', comment: @comment
end

json.set! "post" do
    json.partial! 'api/posts/post', post: @comment.post 
end
