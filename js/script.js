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

    $(function() {
      $("#phone").mask("+7(999)999-99-99", {
        placeholder: "+7(___)___-__-__",
      });
    });

    $('#calendar').clndr();
  });
 
    
  
  