$(document).ready(function() {
  var imageCount = 0;
  addExtraImage = function(){
    $(".image_addition").append('<dir class="added_image_form"><br /><input type="file" name="picture[]" id="addition_file' + imageCount + '"><div class="picture_display added_image' + imageCount + '"></div></div>');
    imageCount += 1;
  };

  addExtraImage();

  removeExtraImage = function(){
    $(".added_image_form").last().remove();
  }

  $("#extra_pic").click(function(){
    addExtraImage();
  });

  $("#remove_pic").click(function(){
    console.log(imageCount)
    if(imageCount > 1){
      removeExtraImage();
      imageCount -= 1;
    };
  });

  $("#submit_new_images").click(function(){
    if($("#album_name").val() === ""){
      alert("Please enter an album name.")
      event.preventDefault();
      return
    };
    for(var i = 0; i < imageCount; i++){
      var current_image = "#addition_file" + i
      if($(current_image).val() === ""){
        alert("Please enter all of your desired images.")
        event.preventDefault();
        return
      };
    };
  });
});








