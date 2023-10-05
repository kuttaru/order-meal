(function($) {
  $(document).ready(function() {

/*
  $('body a').each(function(){ 
    var oldUrl = $(this).attr("href"); 
    var newUrl = ("/order-meal" + oldUrl );
    $(this).attr("href", newUrl);
  });
*/



    
  $(document.body).on('click', '.show_filter' ,function(){
    if ($('body').hasClass('active_filter')) {
      $('body').removeClass("active_filter");
    } else {
      $('body').addClass("active_filter");
    }
  });
    


  var swiper = new Swiper(".meal-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

  });


var swiper = new Swiper(".dateslide", {
  slidesPerView: 3,
  spaceBetween: 14,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      40: {
        slidesPerView: 3,
      },
      740: {
        slidesPerView: 3.5,
      }
    }


});




  $(".count_input span").on("click", function() {
    var $button = $(this);
    var oldValue = parseInt($button.parent().find("input").val());
    var newVal;

    if ($button.text() === "+") {
      newVal = oldValue + 1;
    } else {
      // Don't allow decrementing below zero
      newVal = (oldValue > 1) ? oldValue - 1 : 1;
    }
    $button.parent().find("input").val(newVal);
  });



$('#datetim-picker').on('click', function(event){
    event.stopPropagation();
});







  });
})(jQuery);


