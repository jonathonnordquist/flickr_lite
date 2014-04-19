$(document).ready(function() {
 $("#login_form").click(function(e){
  e.preventDefault();

  $("body").append($('<div id="login_content" class="baby_blue_background"><form method="post" action="/users/login" id="user_login"><label class="reg_text">Registered?  Sign in here</label><input type="text" id="existing_username" placeholder="Username" name="username" class="reg_fields"><input type="password" id="existing_password" placeholder="Password" name="password" class="reg_fields"><input type="submit" id="signin_button" class="reg_fields" value="Sign In"></form><form method="post" action="/users"><label class="reg_text">Need to register?  Thats cool.  Fill out the form and hit the button.</label><input type="text" placeholder="Username" name="user[username]" id="new_username" class="reg_fields"><input type="password" placeholder="Password" name="user[password]" id="new_password" class="reg_fields"><input type="password" placeholder="Confirm Password" name="user[password_confirmation]" id="new_password_conf" class="reg_fields"><input type="text" placeholder="Email" name="user[email]" id="new_email" class="reg_fields"><input type="submit" id="register_button" class="reg_fields" value="Register"></form></div>').hide().fadeIn(1000));

 });

  $("body").on("click", "#signin_button", function(){
    event.preventDefault();
    var username = $("#existing_username").val()
    var password = $("#existing_password").val()
    console.log(username)
    console.log(password)
    $.post('/users/login',
    {username: username,
      password: password},
      function(data){
        has_session = $.parseJSON(data)
        if(has_session === "logged_in"){
          $("#login_content").remove();
          $("#login_form").remove();
          $("#top_bar").append('<a href="/" id="user_page_link" class="user_management scarlet baby_blue_background black">User Profile</a>')
        }else if(has_session === "bad_password"){
          alert("Your password is incorrect")
        }else if(has_session == "no_username"){
          alert("Entered username doesn't exist")
        }
      })
  })

  $("body").on("click", "#register_button", function(){
    event.preventDefault();
    var username = $("#new_username").val()
    var password = $("#new_password").val()
    var password_confirmation = $("#new_password_conf").val()
    var email = $("#new_email").val()
    console.log(username)
    console.log(password)
    console.log(email)
    $.post('/users',
    {username: username,
      password: password,
      password_confirmation: password_confirmation,
      email: email},
      function(data){
        if(data === "account created"){
          $("#login_content").remove();
          $("#login_form").remove();
          $("#top_bar").append('<a href="/" id="user_page_link" class="user_management scarlet baby_blue_background black">User Profile</a>')
        }else if(data === "account not created"){
          alert("Your account was not successfuly created")
        }
      })
  })

});
