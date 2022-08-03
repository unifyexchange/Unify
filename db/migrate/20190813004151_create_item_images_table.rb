class CreateItemImagesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :item_images do |t|
      t.integer :item_id, null: false
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
