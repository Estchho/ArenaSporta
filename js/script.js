$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 4,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      loop: true
    });
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $('header').addClass("sticky");
      }
      else{
      $('header').removeClass("sticky");
      }
      });
      
  });
 
    //$('.header__tool_cal').clndr();
  
  