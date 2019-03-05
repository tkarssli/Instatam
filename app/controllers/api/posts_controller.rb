class Api::PostsController < ApplicationController
    # before_action :require_login

    def index
        @posts = Post.with_attached_photo.all
        render :index
    end

    def user_posts
        @posts = Post.with_attached_photo.all.where(user_id: params[:user_id])
        render :index
    end

    def show 
        @post = Post.with_attached_photo.find(params[:id])
        if @post
            render :show, status: 201
        else
            render json: "Not Found", status: 404
        end
    end

    def create 
        if params[:post][:photo].instance_of?(String) 
            return render json: ["Image Required"], status: 401
        end
            resize_photo(params[:post][:photo])

        @post = Post.new(post_params)
        @post.user_id = current_user.id

        if @post.save
            render :show, status: 201
        else
            render json: @post.errors.full_messages, status: 401
        end

    end

    def update 
        if params[:post][:photo].instance_of?(String) 
            return render json: ["Image Required"], status: 401
        end
        resize_photo(params[:post][:photo])

        @post = Post.find_by(params[:id])
        if @post.update_attributes(post_params)
            @post.save
            render :show, status: 201
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy 
        if current_user 
            render json: {}, status: 200
        else 
            render json: {
                message: "No user to log out",
            },
            status: 401
        end
    end 

    private
    def post_params
        params.require(:post).permit(:caption, :user_id, :photo)
    end

    def resize_photo(photo)
        file = photo.open
        new_image = MiniMagick::Image.new(file.path)
        new_image.resize "600x600>"
    end

end
