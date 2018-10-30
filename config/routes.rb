Rails.application.routes.draw do

  root :to => "homes#index"

  get "prices" => "global_prices#index"
  get "clients" => "clients#index"
end
