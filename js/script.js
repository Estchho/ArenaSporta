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
      $('header').addClass('sticky');
      $('.header__nav__link').addClass("header__nav__link-scroll");
      $('.header__logo').html('<img src="img/Header_logo-scroll.svg" alt=""></img>');
      $('.header__tool').html('<div class="header__tool_cal" id="calendar"><img src="img/Header_cal-scroll.svg" alt=""></div><a href="#" class="header__tool_phone"><img src="img/Header_mail.svg" alt=""></a>')
      }
      else{
      $('header').removeClass('sticky');
      $('.header__nav__link').removeClass('header__nav__link-scroll')
      $('.header__logo').html('<img src="img/Header_logo.svg" alt="">');
      $('.header__tool').html('<div class="header__tool_cal" id="calendar"><img src="img/Header_cal.svg" alt=""></div><a href="#" class="header__tool_phone"><img src="img/Header_phone.svg" alt=""></a>')
      }
      });

       //$('#calendar').clndr();
  });
 
    
  
  