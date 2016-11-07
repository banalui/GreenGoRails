class PartnerSessionsController < ApplicationController
  def new
  end

  def create
    if login(params[:email], params[:password])
      redirect_back_or_to(partner_path, notice: 'Logged in successfully.')
    else
      flash.now.alert = "Login failed."
      redirect_back_or_to(root_path, notice: 'Logged in failed.')
    end
  end

  def destroy
    logout
    redirect_to(:root, notice: 'Logged out!')
  end
end
