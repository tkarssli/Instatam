class Api::CommentsController < ApplicationController

    def show 
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render :show, status: 201
        else
            render json: "Not Found", status: 404
        end
    end

    def index 
        @comments = Comment.all.where(post_id: params[:post_id])
        render :index
    end

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show, status: 201
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end 

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment.update_attributes(comment_params)
            @comment.save
            render :show, status: 201
        else
            render json: @comment.errors.full_messages, status: 401
        end

    end

    def destroy 
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        if @comment
            render :show, status: 201
        else
            render json: {
                message: "No user to log out",
            },
            status: 401
        end
    end

    private 

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)
    end

end
