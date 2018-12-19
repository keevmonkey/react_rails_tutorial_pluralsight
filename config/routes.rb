Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :update, :destroy]
      resources :fruits, only: [:index, :create, :update, :destroy]
    end
  end

  root to: 'home#index'
end
