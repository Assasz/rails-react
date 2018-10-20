Rails.application.routes.draw do
  root 'page#index'
  namespace :api do 
     resources :todos, only: [:index, :show, :create, :destroy, :update]
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
