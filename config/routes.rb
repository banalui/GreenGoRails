Rails.application.routes.draw do
	root to: 'welcome#index'
	get "main", to: "main#index"
	get "partner", to: "partner#index"
	resources :hotels
	resources :partner_sessions, only: [ :new, :create, :destroy ]

	get 'login'  => 'partner_sessions#new'
	get 'logout' => 'partner_sessions#destroy'
end
