json.set! "user" do 
    json.partial! 'api/users/user', user: @follow.user
end
json.set! "follower" do 
    json.partial! 'api/users/user', user: @follow.follower
end