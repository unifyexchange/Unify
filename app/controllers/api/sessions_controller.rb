class Api::SessionsController < ApplicationController
  def create
    print "before\n"
    print User.last.email_address+ "\n"
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
    )
    print "after\n"

    if @user
      if @user.is_verified
        login(@user)
        render "api/users/show"
      else
        render json: ["Please check your email for verification"], status: 401
      end

    else
      render json: ["Invalid email address/password combination"], status: 401
    end
  end
  
  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
