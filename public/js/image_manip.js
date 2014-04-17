$(document).ready(function() {
  $(".thumb_nail").click(function(){
    event.preventDefault();
    console.log(this)
    $(this).wrap(function(){
      return "<div class='current'>";
    });
    $(this).switchClass("thumb_nail", "current_image", 2000, "easeInQuad");
    $(this).removeClass("thumb_nail");
    appendForm();
  });
});

appendForm = function(){
  $(".current").append(
    '<form method="post" action=""><textarea id="comment_content" rows="6" cols="50" placeholder="Leave a comment..."></textarea></br><input type="hidden" id="users_id" value="<%= session[:user_id] %>"><input type="hidden" id="image_id" value="<%= @image.id %>"><input type="submit" value="Post Comment" id="post_comment"></form><div id="posted_comments"></div>'
    )
};
