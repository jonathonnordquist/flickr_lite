get '/users/new' do
  erb :signup
end

get '/users/:user_id' do
  if session[:user_id]
   erb :user_profile
  else
    redirect "/"
  end
end

post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect "/users/#{session[:user_id]}"
  else
    redirect "/"
  end

  # OR (but use first one)

  # user = User.create(params[:user])
  # if user.valid?
  #   sign them in
  # else
  #   they need to re enter stuff
  # end

  redirect '/'
end

post '/users/login' do

  user = User.find_by_username(params[:username])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
  elsif user
    session[:error] = "Your password was incorrect."
  else
    session[:error] = "This username doesn't exist."
  end
  redirect "/users/#{session[:user_id]}"
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
