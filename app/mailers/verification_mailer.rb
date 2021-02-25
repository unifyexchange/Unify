class VerificationMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.verification_mailer.verifyUser.subject
  #
  def verifyUser
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.verification_mailer.forgotPassword.subject
  #
  def forgotPassword
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
