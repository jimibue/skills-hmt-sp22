Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get "grades/all_yo", to: "grades#all_and_then_some"
    resources :skills
    resources :grades
    resources :users
  end
end
