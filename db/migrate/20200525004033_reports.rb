class Reports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :title
      t.text :body
      t.string :status
      t.string :ticket, unique: true
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.timestamps
  end
  add_index :reports, :user_id
  add_index :reports, :item_id
 end
end