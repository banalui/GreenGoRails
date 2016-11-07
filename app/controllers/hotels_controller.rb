class HotelsController < ApplicationController
	include HotelsHelper
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
