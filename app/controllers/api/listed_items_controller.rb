class Api::ListedItemsController < ApplicationController
  def index
    @listed_items = Item.where(user_id: current_user.id).order('items.created_at DESC')
  end
end