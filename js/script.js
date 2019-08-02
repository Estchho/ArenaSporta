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
      // loop: true
    });

    // init about swiper
    var aboutSwiper = new Swiper ('.about__slider', {
      // Optional parameters
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
        $('.header-container').addClass('sticky');
        $('.header__nav__link').addClass("header__nav__link-scroll");
      }
      else {
        $('.header-container').removeClass('sticky');
        $('.header__nav__link').removeClass('header__nav__link-scroll')
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

  // init tabby tabs
  var tabs = new Tabby('[data-tabs]');


  // modal mask
  var phoneMask = IMask(
    document.getElementById('modal__phone'), {
      mask: '+{7}(000)000-00-00'
    });


  // preloader
  $('.above-fold').on('load error', function(e){
    $('#preloader').removeClass('--visible');
  });

  // dropkick dropdowns
  $('.dropkick').dropkick();
