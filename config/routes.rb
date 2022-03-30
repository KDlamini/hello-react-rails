Rails.application.routes.draw do
  root "greetings#index"

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end

  get "*path", to: "greetings#index", via: :all
end
