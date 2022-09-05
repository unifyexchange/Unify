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

  def ms_login
    if valid_edu_email_address?(user_params[:email_address])
      @user = User.find_by(email_address: user_params[:email_address])
      if @user.nil?
        @user = User.new(user_params)
        @user.assign_attributes({ school: School.first } )
        if @user.save
          @user.update_column(:is_verified, true)
        else
          render json: @user.errors.full_messages, status: 422
        end
      end
      login(@user)
      render "api/users/show"
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

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :first_name, :last_name)
  end

  def valid_edu_email_address?(email)

    checkAuthorization = $admin.include?(email)
    if checkAuthorization
      return checkAuthorization
    else
      school_name = email.split("@")[1]
      school_name&.downcase == "redlands.edu"
    end
  end
end
