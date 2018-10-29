Rails.application.routes.draw do

  root :to => "homes#index"

  get "visi" => "visions#index"
  get "sejarah" => "histories#index"
  get "struktur-organisasi" => "structures#index"
  get "kontak" => "contacts#index"
end
