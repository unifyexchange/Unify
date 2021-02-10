class AddForeignKeysToReport < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :reports, :users
    add_foreign_key :reports, :items
  end
end
