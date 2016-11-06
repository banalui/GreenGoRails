class HotelsController < ApplicationController
	include HotelsHelper

	http_basic_authenticate_with name: "admin", password: "SummerTime1366"

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
