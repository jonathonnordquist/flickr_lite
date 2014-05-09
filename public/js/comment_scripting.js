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
          "<div class='comment_text'><h4 class='inline_heading'>Comment posted by " + djsonified.comment_poster + "</h4><p class='inline_heading'> at " + djsonified.timestamp + "</p><p>" + djsonified.comment_content + "</p></div>")
        }
      );
  });

  $("body").on("click", ".thumb", function(){
    var direction = $(this).attr("id")
    var image = $(this).attr("data-image")
    console.log(image)
    $.post('/albums/image/vote',
          {direction: direction,
            image: image}//,
            // function(data){
            //   if(data === "success"){
            //     if(direction === "current_ups"){
            //       console.log($("span #current_ups").text())}
            //   }
            // }
            )
    appendVotes(image)
    })

  loadCurrentComments = function(currentImage){
    $.post('/comments/get',
      {image_id: image_id},
      function(data){
        var djsonified = $.parseJSON(data);
        $.each(djsonified, function(index, value){
          $("#posted_comments").prepend("<div class='comment_text'><h4 class='inline_heading'>Comment posted by " + value.username + "</h4><p class='inline_heading'> at " + value.timestamp + "</p><p>" + value.content + "</p><span style='display: none;' id='poster_id' value='" + value.user_id + "'></span></div>");
          if(value.user_id == $("#user-session").val()){
          }
        })
      });
  };
});
