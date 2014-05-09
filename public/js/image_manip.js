$(document).ready(function() {

  $(".thumb_nail").click(function(){
    image_id = $(this).attr("data-image-no") // Intentionally left public for accessability by comment_scripting
    event.preventDefault();
    createPopout(this)
    $(".popup").addClass("current_image baby_blue_background pickled bluewood");
    $(".popup").hide(0);
    $(".popup").fadeIn("1500");
    $(".popup").find(".close_image_button").on('click', function(e){
      e.preventDefault();
      $(this).parent().remove();
    })
    appendForm(this);
    appendVotes(image_id);
    loadCurrentComments(image_id);
  });
});


createPopout = function(targetImage){
  source = $(targetImage).attr('src');
  var album_id = $("#album_id").attr("data_album_id")
  var popup = $('<div class="popup current"><a href="#" class="close_image_button">Close</a><a href="/albums/' + album_id + '/photos/' + image_id + '" target="_blank"><img src="' + source + '" class="current_image" title="popout_image"/></a></div>');
  $("body").append(popup)
};

appendVotes = function(targetImage){
  $.get('/albums/get_votes/' + targetImage,
    function(data){
      $("#image_votes").empty()
      $("#comment_form").prepend("<div id='image_votes'><span id='thumbs'><span><img src='../../icons/Thumb-Up-icon.png' height='18' width='18' class='thumb' id='thumbs_up' data-image='" + targetImage + "'></span><span id='current_ups'> " + data[0] + " </span><span><img src='../../icons/Thumb-Down-icon.png' height='18' width='18' class='thumb' id='thumbs_down' data-image='" + targetImage + "'></span><span id='current_downs'> " + data[1] + " </span></span></div>")
      console.log(data)
    }

    )

}


appendForm = function(){
  $(".popup").append(
    '<form method="post" action="" id="comment_form"><textarea id="comment_content" rows="6" cols="50" placeholder="Leave a comment..."></textarea></br><input type="submit" value="Post Comment" id="post_comment"></form><div id="posted_comments"></div>'
    )
};
