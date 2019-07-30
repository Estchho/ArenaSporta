$(document).ready(function () {

    // init hero swiper
    var heroSwiper = new Swiper ('.hero__slider-wrap', {
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.hero-swiper-pagination',
        type: 'bullets',
        bulletClass: 'fancy-pagination-bullet',
        bulletActiveClass: '--active',
        clickable: true,
      },
    });


    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-team', {
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
      $('.header__tool').html('<div class="header__tool_cal" id="calendar"><img src="img/Header_cal-scroll.svg" alt=""></div><a href="tel:+79510000000" class="header__tool_phone"><img src="img/Header_phone-scroll.svg" alt=""></a>')
      }
      else{
      $('header').removeClass('sticky');
      $('.header__nav__link').removeClass('header__nav__link-scroll')
      $('.header__logo').html('<img src="img/Header_logo.svg" alt="">');
      $('.header__tool').html('<div class="header__tool_cal" id="calendar"><img src="img/Header_cal.svg" alt=""></div><a href="tel:+79510000000" class="header__tool_phone"><img src="img/Header_phone.svg" alt=""></a>')
      }
    });

    $('.catalog__box__item').hover(function(){
      $(this).closest('.catalog__box__item').find('.catalog__box__item__title').css("opacity", "1");
      $(this).closest('.catalog__box__item').find('.catalog__box__item__dots').css("opacity", "1");
      }, function(){
      $('.catalog__box__item__title').css("opacity", "0");
      $('.catalog__box__item__dots').css("opacity", "0");
    });

       //$('#calendar').clndr();
       $('#news-filter__date').clndr();
  });


  // init PLYR
  var player = new Plyr('#hero-player', {
      // ratio: '16:7',
      poster: '/img/poster.jpg'
  });

  // reveal video on hover
  $('.hero__video-wrap').hover(
    // handle mouse in
    function(e){
      $('.hero__slider-wrap').addClass('--hidden');
      player.play();
    },
    // handle mouse out
    function(e){
      $('.hero__slider-wrap').removeClass('--hidden');
      player.pause();
    }
  );

  // reveal video on click
  $('.video_button').click(function(e){
    player.togglePlay();
    $('.hero__slider-wrap').toggleClass('--hidden');
  });
