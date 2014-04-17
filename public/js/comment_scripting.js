$(document).ready(function() {

  $("#post_comment").click(function(){
    event.preventDefault();
    var comment_content = $("#comment_content").val()
    var user_id = $("#users_id").val()
    var image_id = $("#image_id").val()
    $.post('/comments/post',
      {comment_content: comment_content,
      user_id: user_id,
      image_id: image_id},
      function(data){
        var djsonified = $.parseJSON(data)
        console.log(djsonified)
        $("#posted_comments").append(
          "<h4>Comment posted by " + djsonified.comment_poster + "</h4><p>" + djsonified.comment_content + "</p>")
      }


      )
  })



});
