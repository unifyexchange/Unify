class AddItemsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :description, null: false
      t.float :price, precision: 5, scale: 2
      t.string :subtitle
      t.string :name, null: false
      t.integer :user_id
      t.date :expiration_date
      t.string :condition
      t.integer :school_id

      t.timestamps
    end
    add_index :items, :school_id
  end
end
