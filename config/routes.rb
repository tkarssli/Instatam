Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # User Auth
    resources :users, only: [:show, :index, :create]
    get 'users/:user_id/posts', :to => 'posts#user_posts'
    resource :session, only: [:create, :destroy]
    # Posts
    resources :posts, only: [:index, :show, :create, :update, :destroy] do 
      resources :comments, only: [:index]
    end
    # Comments
    resources :comments, only: [:show, :create, :update, :destroy]

  end

  # get '*path', to: redirect('/'), via: :all
end
