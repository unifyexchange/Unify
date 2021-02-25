class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)

    # Automatically assign user to Redlands which is the only school in the system
    if true #valid_edu_email_address?(user_params[:email_address])
       @user.assign_attributes({ school: School.first } ) 
    else
      @user.errors.add(:base, "Must use a valid Redlands email address to register")
      render json: @user.errors.full_messages, status: 422
      return
    end

    if @user.save
      #   login(@user)
      #   render "api/users/show"

      VerificationMailer.verifyUser(@user).deliver_now

      @user.errors.add(:base, "Please verify your email")
      render json: @user.errors.full_messages, status: 422
      return
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def verify
    @user = User.find(params[:id])

    @user.is_verified = true
    @user.save

    login(@user)
    redirect_to "/"

  end

  def sendForgotPasswordEmail
   
    VerificationMailer.forgotPassword(params[:email]).deliver_now

    render json: "Success", status: 200
    
  end

  def changePassword
    redirect_to "/"
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
