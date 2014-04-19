$(document).ready(function() {
  $(".thumb_nail").click(function(){
    image_id = $(this).attr("data-image-no") // Intentionally left public for accessability by comment_scripting
    event.preventDefault();
    newPic = $(this).clone();
    createPopout(this)
    // $(this).wrap(function(){
    //   return "<div class='current'>";
    // });
    $(".popup").addClass("current_image baby_blue_background pickled bluewood");
    $(".popup").hide(0);
    $(".popup").fadeIn("1500");
    // $(this).removeClass("thumb_nail");
    $(".popup").find(".close_image_button").on('click', function(e){
      e.preventDefault();
      $(this).parent().remove();
    })
    appendForm();
    loadCurrentComments(image_id);
  });
});

// var popup = $('<div class="popup"><img src=""/><form method="post" action=""><textarea id="comment_content" rows="6" cols="50" placeholder="Leave a comment..."></textarea></br><input type="submit" value="Post Comment" id="post_comment"></form><div id="posted_comments"></div></div>');
// popup.find("img").attr('src', ?);

// $("body").append(popup);

createPopout = function(targetImage){
  source = $(targetImage).attr('src')
  var popup = $('<div class="popup current"><a href="#" class="close_image_button">Close</a><img src="' + source + '" class="current_image"/></div>');
  $("body").append(popup)
};


appendForm = function(){
  $(".popup").append(
    '<form method="post" action=""><textarea id="comment_content" rows="6" cols="50" placeholder="Leave a comment..."></textarea></br><input type="submit" value="Post Comment" id="post_comment"></form><div id="posted_comments"></div>'
    )
};
