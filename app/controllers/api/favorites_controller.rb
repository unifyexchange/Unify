class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.where(user_id: current_user.id).order('created_at DESC')
  end

  def create
    @favorite = Favorite.new(user_id: current_user.id, item_id: favorite_params[:item_id].to_i)

    if @favorite.save
      render "api/favorites/show_favorite"
    else
      render json: ["Error creating favorite"]
    end
  end

  def favorite_params
    params.require(:favorite).permit(:item_id)
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user.id, item_id: favorite_params[:item_id].to_i)

    if @favorite.delete
      render "api/favorites/show_favorite"
    else
      render ["Problem deleting favorite"]
    end
  end
end