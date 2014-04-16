def current_user
  User.find(session[:user_id]) # Returns the user's current id if logged in, nil otherwise.
end
