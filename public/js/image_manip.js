$(document).ready(function() {
  $(".thumb_nail").click(function(){
    event.preventDefault();
    console.log(this)
    $(this).switchClass("thumb_nail", "current_image", 2000, "easeInQuad");
    $(this).removeClass("thumb_nail");
    $(this).wrap(function(){
      return "<div class='current'"> + this + "</div>";
    });
  });
});
