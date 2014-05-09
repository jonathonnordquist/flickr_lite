get '/albums/:album_id/photos/:photo_id' do
  @image = Image.find(params[:photo_id])
  # Lower code commented out, used to be tied to show_image_old.erb.
  # @comments = Comment.where(image_id: params[:photo_id])
  # @creator_names = []
  # @comments.each do |comment|
  #   @creator_names << User.where(id: comment.user_id)[0].username
  # end
  erb :show_image
end

get '/albums/new' do
  erb :new
end

post '/albums' do
  new_album = Album.create(album_name: params[:album_name], user_id: session[:user_id], album_vote_ups: 0, album_vote_downs: 0)

  if params["picture"] != nil
    params["picture"].each do |pic|
      File.open('public/uploaded_images/' + pic[:filename], "w") do |f|
        f.write(pic[:tempfile].read)
        Image.create(image_file: "uploaded_images/" + pic[:filename], album_id: new_album.id, image_vote_ups: 0, image_vote_downs: 0)
      end
    end
  end

  @latest_image = "#{Image.last.image_file}"
  redirect "/albums/#{new_album.id}"
end

get '/albums/:album_id' do
  @album = Album.find(params[:album_id])
  @album_images = []
  @images = Image.where(album_id: params[:album_id])
  erb :show_album
end

post '/albums/image/vote' do
  image = Image.find(params[:image])
  params[:direction] == "thumbs_up" ? image.image_vote_ups += 1 : image.image_vote_downs += 1
  image.save
  "success"
end

get '/albums/get_votes/:id' do
  votes = []
  current_ups = Image.find(params[:id]).image_vote_ups
  current_downs = Image.find(params[:id]).image_vote_downs
  votes << current_ups
  votes << current_downs
  content_type :JSON
  votes.to_json
end











