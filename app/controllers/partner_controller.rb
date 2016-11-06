class PartnerController < ApplicationController

	before_filter :require_login, except: [:show]
	
	def require_login
    	unless logged_in?
      		flash.notice = "You must be logged in to access this section"
      		redirect_to root_path
    	end
    end

	def index
		@hotel = Hotel.new
		@hotels = Hotel.all
	end
end
