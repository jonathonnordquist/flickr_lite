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












