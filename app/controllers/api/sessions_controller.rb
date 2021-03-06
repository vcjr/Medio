class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Email/Password Combination"], status: 401
    end
  end

  # def show
  #   @user = User.find_by(id: params[:id])
  #   render "api/users/#{@user.id}"
  # end

  def destroy
    @user = current_user
    
    if @user
      logout
      # TODO Remember to change this render after test to send and set the user state to how the sample state looks
      render "api/users/show"
    else
      render json: ["You aren't signed in to logout"], status: 404
    end
  end

end