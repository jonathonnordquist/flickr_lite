post '/comments/post' do
  new_comment = Comment.create(content: params[:comment_content], user_id: params[:user_id], image_id: params[:image_id])
  output_info = {}
  output_info[:comment_content] = new_comment.content
  Comment.where(image_id: params[:image_id]).each do |x|
    output_info
  end
  output_info[:comment_poster] = User.where(id: params[:user_id])[0].username
  output = output_info.to_json
end

post '/comments/get' do
  output_info = []
  comments = Comment.where(image_id: params[:image_id]).each do |comment|
    output_info << {content: comment.content, timestamp: comment.created_at.strftime("%l:%M %P, %b %-d, %Y"), username: User.where(id: comment.user_id).first.username}
  end
  output_info.to_json
end
