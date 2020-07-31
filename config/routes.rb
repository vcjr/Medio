Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resources :stories, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
