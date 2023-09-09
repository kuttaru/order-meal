(function($) {
  $(document).ready(function() {


$(document.body).on('click', '.links_wrap h3' ,function(){
  if ($(this).parent('.links_wrap').hasClass('show')) {
    $(this).parent('.links_wrap').removeClass("show");
  } else {
    $(this).parent('.links_wrap').addClass("show");
  }
});
    





  });
})(jQuery);


