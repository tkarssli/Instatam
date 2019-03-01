class Api::UsersController < ApplicationController
    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show, status: 201
        else
            render json: "Not Found", status: 404
        end
    end

    def index
        @users = User.all
        render :index
    end

    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show, status: 201
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :session_token)
    end


end
