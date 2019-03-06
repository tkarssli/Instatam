defaults = { comments: {}, users: {} }
json.merge! defaults

json.set! "comments" do
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end
json.set! "users" do
    @comments.each do |comment|
        json.set! comment.user.id do
            json.partial! 'api/users/user', user: comment.user 
        end
    end
end
