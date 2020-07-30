class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    name = @user.email.split("@")[0]

    @user.name = name
    
    if @user.save
      login(@user)
      # TODO Remember to change this render after test to send and set the user state to how the sample state looks
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
