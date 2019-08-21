$(document).ready(function() {

  // init hero swiper
  function initHomeSlider() {
    var heroSwiper = new Swiper('.hero__slider-wrap', {
      autoplay: {
        delay: 6000,
        // disableOnInteraction: false
      },
      pagination: {
        el: '.hero-swiper-pagination',
        type: 'bullets',
        bulletClass: 'fancy-pagination-bullet',
        bulletActiveClass: '--active',
        clickable: true,
      },
    });
  }

  //initialize team swiper
  var teamSwiper = new Swiper('.swiper-team', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    // loop: true
  });

  // init schedule swiper
  //initialize swiper when document ready
  var schedSwiper = new Swiper('.swiper-schedule', {
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  // init about section swiper
  var aboutSwiper = new Swiper('.about__slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // zero-pad a number
  function pad(num) {
    return (num.toString().length == 1) ? '0' + num : num;
  }

  // init about page swiper
  var aboutPageSwiper = new Swiper('.js-wide-row-slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.wide-row__swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function(num) {
          return pad(num)
      },
      formatFractionTotal: function(num) {
          return pad(num)
      },
    },
  });


  // header scroll states
  function headerOnScroll() {
    if ($(this).scrollTop() > 1) {
      $('header').addClass('sticky');
      $('.header__nav-link').addClass("header__nav-link-scroll");
    } else {
      $('header').removeClass('sticky');
      $('.header__nav-link').removeClass('header__nav-link-scroll')
    }
  }

  $(window).scroll(function() {
    headerOnScroll();
  });

  headerOnScroll();


  // init PLYR
  var player = new Plyr('#hero-player', {
    // ratio: '16:7',
    poster: '/img/poster.jpg'
  });

  // reveal video on hover
  $('.hero__video-wrap').hover(
    // handle mouse in
    function(e) {
      $('.hero__slider-wrap').addClass('--hidden');
      player.play();
    },
    // handle mouse out
    function(e) {
      $('.hero__slider-wrap').removeClass('--hidden');
      player.pause();
    }
  );

  // reveal video on click
  $('.video_button').click(function(e) {
    player.togglePlay();
    $('.hero__slider-wrap').toggleClass('--hidden');
  });

  // init tabby tabs
  if ($('[data-tabs]').length > 0) {
    var tabs = new Tabby('[data-tabs]');
  }

  // modal mask
  var phoneMask = IMask(document.getElementById('modal__phone'), {
      mask: '+{7}(000)000-00-00'
  });

  // dropkick dropdowns
  $('.dropkick').dropkick();

  /**
  * preloader
  */
  var $slide = $('.hero-slide.--one');
  var bgsrc = $slide.css('background-image');
  // get rid of url()
  // bgsrc = bgsrc.match(/(?<=url\(").*?(?="\))/g)[0];
  if (bgsrc && bgsrc.length > 0) {
    bgsrc = /(?:url\(")(.*?)(?:"\))/gi.exec(bgsrc)[1];
    var img = new Image();
    img.src = bgsrc;
    $(img).on('load error', function(e) {
      $('#preloader').removeClass('--visible');
    });
    initHomeSlider();
  } else {
    $(window).on('load error', function(e) {
      $('#preloader').removeClass('--visible');
    });
    initHomeSlider();
  }

  // stick it to the man
  var sticky = new Sticky('.js-sticky');

  // catalog dots
  $('[data-fields]').each(function(){
    var $catItem = $(this);
    var fields = $catItem.data('fields');
    var $dots = $catItem.find('.catalog__item_dots');
    var $tooltip = $('<div class="catalog__item_tooltip"/>');

    var map = {
      fitness: "фитнес",
      martial: "боевые искусства",
      kids: "доступно для детей",
      games: "игровой спорт",
      olympic: "олимпийский спорт",
    }

    // create a dot for each field
    $.each(fields, function(i, field){
      var $dot = $('<div class="catalog__item_dot"/>');
      var className = '--' + field;
      $dots.append($dot.addClass(className));
      $catItem.addClass(className);
      // add tooltip text
      $tooltip.append($('<span/>').text(map[field]));
      var html = $tooltip[0].outerHTML;
      console.log();

      new Tooltip($dots, {
        placement: 'top',
        trigger: 'hover',
        html: true,
        title: html
      });
    });
  });

  // back button
  $('.page-back').click(function(){
    window.history.back();
  });

}); // doc ready end
