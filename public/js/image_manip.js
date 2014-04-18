$(document).ready(function() {
  $(".thumb_nail").click(function(){
    image_id = $(this).attr("data-image-no") // Intentionally left public for accessability by comment_scripting
    event.preventDefault();
    newPic = $(this).clone();
    console.log(this)
    console.log(newPic)
    $(this).wrap(function(){
      return "<div class='current'>";
    });
    $(this).addClass("current_image");
    $(this).hide(0);
    $(this).fadeIn("1500");
    $(this).removeClass("thumb_nail");
    appendForm();
    loadCurrentComments(image_id);
  });
});

appendForm = function(){
  $(".current").append(
    '<form method="post" action=""><textarea id="comment_content" rows="6" cols="50" placeholder="Leave a comment..."></textarea></br><input type="submit" value="Post Comment" id="post_comment"></form><div id="posted_comments"></div>'
    )
};
