get '/users/new' do
  erb :signup
end

get '/users/:user_id' do
  if session[:user_id]
    p session
   erb :user_profile
  else
    redirect "/"
  end
end

post '/users' do
  p "========================================="
  p params
  user = User.new(username: params[:username], password: params[:password], password_confirmation: params[:password_confirmation], email: params[:email])
  if user.save
    session[:user_id] = user.id
    return "account created"
    # redirect "/users/#{session[:user_id]}"
  else
    return "account not created"
  end

  # OR (but use first one)

  # user = User.create(params[:user])
  # if user.valid?
  #   sign them in
  # else
  #   they need to re enter stuff
  # end

  # redirect '/'
end

post '/users/login' do
  p params[:username]
  p params[:password]
  user = User.find_by_username(params[:username])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    session[:username] = user.username
    session[:error] = nil
    login_status = "logged_in"
  elsif user
    session[:error] = "Your password was incorrect."
    login_status = "bad_password"
  else
    session[:error] = "This username doesn't exist."
    login_status = "no_username"
  end
  p "======================================="
  p login_status
  p login_status.to_json
  # redirect "/users/#{session[:user_id]}"
end

post '/users/:user_id/albums' do
  @users_name = User.find(session[:user_id]).username
  @albums = Album.where(user_id: session[:user_id])
  erb :show_album_list
end

post '/users/logout' do
  session[:user_id] = nil
  redirect '/'
end
