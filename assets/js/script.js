(function($) {
  $(document).ready(function() {

	$('.sidenav').sidenav({
	  edge: 'right', 
	});
    // $('.modal').modal();

    setTimeout(function(){
        $("#main-video").trigger('play');

    }, 5000);


    

    $('.modal').modal({
        dismissible: true,
        onOpenEnd: function(modal, trigger) {
        $("#video").trigger('play'); 
        },
        onCloseEnd: function() { 
        $("#video").trigger('pause');
        } 
    });



  $('.collapsible').collapsible();

  $('.single-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
  })


$('.three-item').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



  $(".close-btn").click(function(){
    $(".accc-content").slideUp();
  });


  $(".acc-item").click(function(){
    $(this).addClass('active');
    $(this).find(".accc-content").slideDown();
  });




  });
})(jQuery);


