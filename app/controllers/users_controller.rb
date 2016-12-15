class UsersController < ApplicationController
  before_filter :require_login, only: [:index]
  def index
  end

  def new
  end
end
