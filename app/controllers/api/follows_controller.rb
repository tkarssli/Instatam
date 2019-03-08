class Api::FollowsController < ApplicationController


def create 
    @follow = Follow.new(user_id: params[:user_id])
    @follow.follower_id = current_user.id

    if (@follow.save)
        render :show, status: 201
    else
        render json: @follow.errors.full_messages, status: 401
    end

end

def destroy
    @follow = Follow.find_by(follower_id: current_user.id, user_id: params[:user_id])
    if @follow || current_user.id == @follow.follower_id
        @follow.destroy
        render :show, status: 200
    else 
        render json: {
            message: "Must be owner of follow to remove",
        },
        status: 401
    end
end
    
    
end
