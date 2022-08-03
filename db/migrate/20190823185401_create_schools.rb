class CreateSchools < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|
      t.string :motto
      t.string :nickname
      t.integer :year_established
      t.string :logo_image_url
      t.string :name, null: false
      t.string :website
      t.text :description
      t.string :phone
      t.integer :institution_size
      t.string :shortname
      t.string :location

      t.timestamps
    end
  end
end
