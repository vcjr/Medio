class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # TODO Remember to change this render after test to send and set the user state to how the sample state looks
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
  end

  private 

  def user_params
    params.require(:user).permit(:emai, :password)
  end
end
