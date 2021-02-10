class CreateSearchstrings < ActiveRecord::Migration[5.2]
  def change
    create_table :searchstrings do |t|
      t.string :string
      t.timestamps
    end
  end
end
