class HotelsController < ApplicationController
	include HotelsHelper
	
	before_filter :require_login
	
	def require_login
    	unless logged_in?
      		flash.notice = "You must be logged in to access this section"
      		redirect_to root_path
    	end
    end

	def new
		@hotel = Hotel.new
	end

	def index
		@hotels = Hotel.all
	end
	def create
  		@hotel = Hotel.new(hotel_params)
  		@hotel.save!

  		redirect_to partner_path
	end

	def destroy
		@hotel = Hotel.find(params[:id])
		@hotel.destroy
		flash.notice = "Hotel '#{@hotel.name}' Deleted!"

		redirect_to partner_path
	end
end
