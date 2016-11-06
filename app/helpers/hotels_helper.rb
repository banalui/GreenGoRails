module HotelsHelper
	def hotel_params
  		params.require(:hotel).permit(:name, :street_address, :phone, :city, :country, :state, :zip_code, :stars, :eco_rate)
	end
end
