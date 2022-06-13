require 'test_helper'

class VerificationMailerTest < ActionMailer::TestCase
  test "verifyUser" do
    mail = VerificationMailer.verifyUser
    assert_equal "Verifyuser", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "forgotPassword" do
    mail = VerificationMailer.forgotPassword
    assert_equal "Forgotpassword", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
