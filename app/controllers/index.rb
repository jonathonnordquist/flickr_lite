get '/' do
  # Look in app/views/index.erb
  if session[:user_id]
    redirect "/users/#{session[:user_id]}"
  else
    erb :index
  end
end

# USERS

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

# ALBUMS

get '/albums/:album_id/photos/:photo_id' do

end

get '/albums/new' do
  erb :new
end

post '/albums' do

  File.open('public/uploaded_images/' + params['picture'][:filename], "w") do |f|
    f.write(params['picture'][:tempfile].read)
  end

  new_album = Album.create(album_name: params[:album_name], user_id: session[:user_id])

  Image.create(image_file: "uploaded_images/" + params['picture'][:filename], album_id: new_album.id)

  @latest_image = "#{Image.last.image_file}"
  redirect "/albums/#{new_album.id}"
end

get '/albums/:album_id' do
  @album = Album.find(params[:album_id])
  @album_images = []
  p "=================================================="
  @images = Image.where(album_id: params[:album_id])
  erb :show_album
end

get '/albums/:album_id/edit' do

end

post '/albums/:album_id' do
end












