class AddFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :item, index: true, foreign_key: true, null: false

      t.timestamps
    end

    add_index :favorites, [:user_id, :item_id], unique: true
  end
end
