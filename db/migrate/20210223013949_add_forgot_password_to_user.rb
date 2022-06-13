class AddForgotPasswordToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :forgot_password, :boolean
  end
end
