class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)

    # Automatically assign user to Redlands which is the only school in the system
    if true#valid_edu_email_address?(user_params[:email_address])
       @user.assign_attributes({ school: School.first } ) 
    else
      @user.errors.add(:base, "Must use a valid Redlands email address to register")
      render json: @user.errors.full_messages, status: 422
      return
    end

    if @user.save
      #   login(@user)
      #   render "api/users/show"

      if !@user.is_verified
        VerificationMailer.verifyUser(@user).deliver_now

        @user.errors.add(:base, "Please check your email for verification")
      end

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
    @user = User.find_by(email_address: params[:email])
    print "IN FORGOT PSW", @user
    if @user
      VerificationMailer.forgotPassword(@user).deliver_now
      render json: "Success", status: 200
    else
      render json: "Email not found", status: 404
    end
  end

  def verifyChangePassword
    @user = User.find(params[:id])
    @user.forgot_password = true
    @user.save

    print @user.forgot_password

    redirect_to "#/changePassword/#{params[:id]}"
  end


  def changePassword

    @user = User.find(changePassword_params[:userID])
    print @user.forgot_password

    if @user.forgot_password
      @user.password = changePassword_params[:password]
      @user.forgot_password = false
      @user.save
      render json: "#{@user.email_address}", status: 200
    else
      render json: "Forbidden", status: 403
    end

    
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :first_name, :last_name)
  end

  def changePassword_params
    params.require(:payload).permit(:userID, :password, :passwordAgain)
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
