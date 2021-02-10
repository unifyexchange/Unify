class AddNewColumnsToItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :school_id

    add_reference :items, :category, foreign_key: true, null: false
    add_reference :items, :condition, foreign_key: true, null: false
    add_reference :items, :school, foreign_key: true, null: false
  end
end
