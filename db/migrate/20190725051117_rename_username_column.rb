class RenameUsernameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :email_address
  end
end
