$(document).ready(function() {
 $("#login_form").click(function(e){
  e.preventDefault();

  $("body").append($('<div id="login_content" class="baby_blue_background"><form method="post" action="/users/login" id="user_login"><label class="reg_text">Registered?  Sign in here</label><input type="text" id="existing_username" placeholder="Username" name="username" class="reg_fields"><input type="password" id="existing_password" placeholder="Password" name="password" class="reg_fields"><input type="submit" id="signin_button" class="reg_fields"></form><form method="post" action="/users"><label class="reg_text">Need to register?  Thats cool.  Fill out the form and hit the button.</label><input type="text" placeholder="Username" name="user[username]" class="reg_fields"><input type="password" placeholder="Password" name="user[password]" class="reg_fields"><input type="password" placeholder="Confirm Password" name="user[password_confirmation]" class="reg_fields"><input type="text" placeholder="Email" name="user[email]" class="reg_fields"><input type="submit" class="reg_fields"></form></div>').hide().fadeIn(1000));

 });

  $("body").on("click", "#signin_button", function(){
    event.preventDefault();
    var user_name = $("#existing_username").val()
    var password = $("#existing_password").val()
    console.log(user_name)
    console.log(password)
    $.post('/users/login',
    {username: user_name,
      password: password},
      function(data){
        has_session = $.parseJSON(data)
        if(has_session === true){
          $("#login_content").remove();
          $("#login_form").remove();
          $("#top_bar").append('<a href="/" id="user_page_link" class="user_management scarlet baby_blue_background black">User Profile</a>')
        }else{
          alert("You suck")
        }


      }
      )
  })

});
