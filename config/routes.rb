Rails.application.routes.draw do
  namespace :api do 
    post '/todos/search' => 'todos#search'
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end 

  root 'page#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
