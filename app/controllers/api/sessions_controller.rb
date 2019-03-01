class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render "api/users/show", status: 201
        else
            render json:["Invalid Username/Password Combination"], status: 401 
        end
    end 

    def destroy
        if current_user 
            logout!
            render json: {}, status: 200
        else 
            render json: {
                message: "No user to log out",
            },
            status: 401
        end
    end

end
