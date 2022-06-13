class AddCategoryImageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :image_url, :string
  end
end
