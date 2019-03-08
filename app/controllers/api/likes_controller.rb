class Api::LikesController < ApplicationController

    def create 
        @like = Like.new(post_id: params[:post_id])
        @like.user_id = current_user.id

        if (@like.save)
            render :show, status: 201
        else
            render json: @like.errors.full_messages, status: 401
        end

    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, post_id: params[:post_id])
        if @like || current_user.id == @like.user_id
            @like.destroy
            render :show, status: 200
        else 
            render json: {
                message: "Must be owner of like to remove",
            },
            status: 401
        end
    end

end
