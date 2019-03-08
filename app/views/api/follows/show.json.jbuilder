
json.set!   @follow.user.id do
    json.partial! 'api/users/user', user: @follow.user
end

json.set!   @follow.follower.id do
    json.partial! 'api/users/user', user: @follow.follower
end