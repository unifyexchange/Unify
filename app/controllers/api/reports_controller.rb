class Api::ReportsController < ApplicationController

  def index

   checkAuthorization = $admin.include?(current_user.email_address)

   if checkAuthorization
    @total = Report.all.count
    @reports = Report.paginate(:page => params[:page], :per_page => 20).order('reports.created_at DESC')
   else
    @total = Report.where(:user_id => current_user.id).count
    @reports = Report.where(:user_id => current_user.id).paginate(:page => params[:page], :per_page => 20).order('reports.updated_at DESC')
   end
  end

  def create

     t = Time.now      
     "%10.9f" % t.to_f      
     uniqueString  = "TIC-" +  t.nsec.to_s  
     
     @item = Item.find(report_params[:item_id].to_i)
     @report = Report.new(title: report_params[:title], body: report_params[:body], status: "PENDING", item_id: @item&.id, ticket: uniqueString, user_id: current_user.id)

    if @report.save
      render json: ["Success"], status: 200
    else
      render json: ["Error creating favorite"], status: 401
    end
  end


  def update
 
    status = ["IN_PROGRESS", "RESOLVED"]

    checkStatus =  status.include?(report_params[:status])
    @report = Report.find(params[:report][:reportId].to_i)

    if checkStatus
      @report.update(status: report_params[:status])
    end

    
  end


  def metrics

   checkAuthorization = $admin.include?(current_user.email_address)

   if checkAuthorization
    
    @allUsers = User.count
    @allListings = Item.count
    @averageListing = (@allListings.to_f /  @allUsers).round(2)

    end_date = DateTime.now
    start_date = DateTime.now - 30.days

    @mostSearch =  Searchstring.select("searchstrings.string, count(searchstrings.id) as count").group('searchstrings.string').order("count DESC").limit(1).where(:created_at => start_date..end_date)

    @categoryItems = Category.joins(:items).select('categories.name, COUNT(items.category_id) as count').group('categories.name', 'categories.created_at').order('categories.created_at ASC')
    render "api/reports/metrics"
   end
  end

  def mostSearchedCategory

    checkAuthorization = $admin.include?(current_user.email_address)
 
    if checkAuthorization
     
     end_date = DateTime.now
     start_date = DateTime.now - 30.days
     @total  =  Searchstring.where(:created_at => start_date..end_date).distinct.count(:string)

     @mostSearch =  Searchstring.select("searchstrings.string, count(searchstrings.id) as count").group('searchstrings.string').paginate(:page => params[:page], :per_page => 20).order("count DESC").where(:created_at => start_date..end_date)
 
     render "api/reports/searchCategory"
    end
   end

  def search

    checkAuthorization = $admin.include?(current_user.email_address)
    ticked_id = params[:ticket]
    if checkAuthorization
      @total = Report.where(:ticket => ticked_id).count
      @reports = Report.where(ticket: ticked_id)
     else
      @total = Report.where(:ticket => ticked_id).count
      @reports = Report.where(user_id: current_user.id, ticket: ticked_id)
   end

    render "api/reports/index"
  end

  def report_params
    params.require(:report).permit(:title, :body, :status, :ticket, :user_id, :item_id, :reportId)
  end


end
