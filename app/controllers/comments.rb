post '/comments/post' do
  p "================================================="
  p params
  new_comment = Comment.create(content: params[:comment_content], user_id: params[:user_id], image_id: params[:image_id])
  output_info = {}
  output_info[:comment_content] = new_comment.content
  output_info[:comment_poster] = User.where(id: params[:user_id])[0].username
  output = output_info.to_json
  p output
end
