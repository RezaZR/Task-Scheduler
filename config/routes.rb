Rails.application.routes.draw do

  root :to => "homes#index"

  get "prices" => "global_prices#index"
end
