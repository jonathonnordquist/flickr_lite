get '/' do
  # Look in app/views/index.erb
  if session[:user_id]
    redirect "/users/#{session[:user_id]}"
  else
    erb :index
  end
end
