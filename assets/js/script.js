(function($) {
  $(document).ready(function() {


  $('body a').each(function(){ 
    var oldUrl = $(this).attr("href"); 
    var newUrl = ("/order-meal" + oldUrl );
    $(this).attr("href", newUrl);
  });




    
  $(document.body).on('click', '.links_wrap h3' ,function(){
    if ($(this).parent('.links_wrap').hasClass('show')) {
      $(this).parent('.links_wrap').removeClass("show");
    } else {
      $(this).parent('.links_wrap').addClass("show");
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


var swiper = new Swiper(".prdtSwiper", {
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
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 3,
      }
    }


});









  });
})(jQuery);


