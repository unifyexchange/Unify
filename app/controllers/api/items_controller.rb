class Api::ItemsController < ApplicationController
  def index
    @items = Item.where(school_id: current_user.school_id).order("id DESC")
  end

  def show
    @item = Item.find(params[:id])
    render "api/items/show_item"
  end
 
  def create
    @images = item_params[:images]

    @category = Category.find_by(name: item_params[:category])
    @condition = Condition.find_by(name: item_params[:condition])
    @item = Item.new(name: item_params[:name], description: item_params[:description], price: item_params[:price], subtitle: item_params[:subtitle], condition_id: @condition&.id, category_id: @category&.id, school_id: current_user.school_id, user_id: current_user.id)

    unless @images && @images.count > 0
      @item.errors.add(:base, "Must upload at least one image")
      render json: @item.errors.full_messages , status: 422
      return
    end

    if @item.save
      # create item images
      @images.each do |image|
        ItemImage.create(item_id: @item.id, image_url: image)
      end

      render "api/items/show_item"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def update
    @images = item_params[:images]

    checkAuthorization = $admin.include?(current_user.email_address)  #$admin a global variable on /controllers/api/concerns/application_controller 

    if checkAuthorization == false
      render json: ["You are not allowed to edit this item"] , status: 422
    end
    @category = Category.find_by(name: item_params[:category])
    @condition = Condition.find_by(name: item_params[:condition])

    @item = Item.find(item_params[:item_id].to_i)
    unless @images && @images.count > 0
      @item.errors.add(:base, "Must upload at least one image")
      render json: @item.errors.full_messages , status: 422
      return
    end

    if @item.update(name: item_params[:name], description: item_params[:description], price: item_params[:price], subtitle: item_params[:subtitle], condition_id: @condition&.id, category_id: @category&.id, school_id: current_user.school_id)
      @clearImage = ItemImage.where(item_id: item_params[:item_id]).destroy_all
      #create item images
      @images.each do |image|
        ItemImage.create(item_id: @item.id, image_url: image)
      end

      render "api/items/show_item"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def listed_items
    @listed_items = Item.where(user_id: current_user.id).order('items.created_at DESC')
  end

  def favorite_items
    @favorite_items = Favorite.where(user_id: current_user.id).order('created_at DESC').map { |f| f.item }

    
    render "api/items/favorite_items"
  end

  def destroy

   checkAuthorization = $admin.include?(current_user.email_address)  #$admin a global variable on /controllers/api/concerns/application_controller 

    if checkAuthorization
      @report = Report.where(item_id: params[:id].to_i).destroy_all
      @favorite = Favorite.where(item_id: params[:id].to_i).destroy_all
      @item = Item.find(params[:id].to_i)
    else
      @report = Report.where(item_id: params[:id].to_i).destroy_all
      @favorite = Favorite.where(item_id: params[:id].to_i).destroy_all
      @item = Item.find_by(user_id: current_user.id, id: params[:id].to_i)
    end

   if@item.delete
      render json: ["Success"], status: 200
    else
     render json: ["Failed"], status: 401
  end
 end


  def category_items

    @submitString = Searchstring.new(string: params[:category]).save

    category_id = Category.find_by("lower(name) = ?", params[:category].downcase)
    if category_id.present?
      @category_items = Item.where(category_id: category_id.id).order('items.created_at DESC')
    end

    if category_id.blank?
      @category_items = Item.where("lower(name) LIKE ?", "%#{params[:category].downcase}%")
    end

    render "api/items/category_items"
  end

  def item_params
    params.require(:item).permit(:category, :description, :price, :subtitle, :name, :condition, :item_id, :user_id, {images: []}, {categories: []}, {conditions: []}, :image, :url)
  end
end