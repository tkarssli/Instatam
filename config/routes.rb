Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # User Auth
    resources :users, only: [:show, :index, :create] do 
      resources :follows, only: [ :create ]

    end
    delete 'users/:user_id/follows', :to => 'follows#destroy'
    get 'users/:user_id/posts', :to => 'posts#user_posts'
    resource :session, only: [:create, :destroy]
    # Posts
    resources :posts, only: [:index, :show, :create, :update, :destroy] do 
      resources :comments, only: [:index]
      resources :likes, only: [:create]
    end
    delete 'posts/:post_id/likes', :to => 'likes#destroy'
    # Comments
    resources :comments, only: [:show, :create, :update, :destroy]
    # Likes
    # resources :likes , only: [:destroy]

    

  end

  # get '*path', to: redirect('/'), via: :all
end
