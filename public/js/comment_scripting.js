$(document).ready(function() {
  $("body").on("click", "#post_comment", function(){
    event.preventDefault();
    var comment_content = $("#comment_content").val()
    $.post('/comments/post',
      {comment_content: comment_content,
      user_id: $("#user-session").val(),
      image_id: image_id},
      function(data){
        var djsonified = $.parseJSON(data);
        $("#posted_comments").prepend(
          "<div id='comment_text'><h4 class='inline_heading'>Comment posted by " + djsonified.comment_poster + "</h4><p class='inline_heading'> at " + djsonified.timestamp + "</p><p>" + djsonified.comment_content + "</p></div>")
        }
      );
  });

  loadCurrentComments = function(currentImage){
    console.log("working")
    $.post('/comments/get',
      {image_id: image_id},
      function(data){
        var djsonified = $.parseJSON(data);

        $.each(djsonified, function(index, value){
          $("#posted_comments").prepend("<div id='comment_text'><h4 class='inline_heading'>Comment posted by " + value.username + "</h4><p class='inline_heading'> at " + value.timestamp + "</p><p>" + value.content + "</p></div>")
        })
      });

  };
});
