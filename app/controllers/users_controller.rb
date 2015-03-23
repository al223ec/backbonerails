class UsersController < ActionController::Base
  respond_to :json

  def index
    @users = User.all
  end
end
