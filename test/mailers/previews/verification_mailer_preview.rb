# Preview all emails at http://localhost:3000/rails/mailers/verification_mailer
class VerificationMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/verification_mailer/verifyUser
  def verifyUser
    VerificationMailer.verifyUser
  end

  # Preview this email at http://localhost:3000/rails/mailers/verification_mailer/forgotPassword
  def forgotPassword
    VerificationMailer.forgotPassword
  end

end
