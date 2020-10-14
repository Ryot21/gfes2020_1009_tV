$( function() {

  var $body = $('body');
  var $menu = $('#js-menu');
  var ua = navigator.userAgent.toLowerCase();




  // anchor link
  function anchorLink() {
    $('a[href^="#"]').click(function() {
       var speed = 400;
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top - 100;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
  }


  function slider() {
    var $slider = $('.js-slider');
    var $sliderList = $slider.find('li');
    $slider.bxSlider({
      mode: 'fade',
      auto: true,
      controls: false,
      pager: false,
      usecss:false,
      pause: 4000,
      essing: 'linear',
      speed: 1000,
    });
  }

  function spChildnav() {
    var $childBtn = $('.js-sp-child');
    $childBtn.on('click', function(e) {
      e.preventDefault();
      // $(this).next('.menu-child').show();
      if($('.menu-list li').hasClass('child-open')) {
        $('.menu-list li').removeClass('child-open');

      } else {
        $(this).parent('li').addClass('child-open');
      }
    });
  }
  //global navigation

  function navControl() {
    var $menuToggle = $('#js-menuToggle');
    var $bottomMenuToggle = $('#js-menuToggleClose');

    $('#js-menuToggle').on('click', function(e) {
      e.preventDefault();
      if ( $menuToggle.hasClass('close') ) {
        $menu.fadeOut(300);
      } else {
        $menu.fadeIn(300);
      }
      $menuToggle.toggleClass('close');
      $body.toggleClass('menu-open');
    });

    $('#js-menu, #js-menuToggle, #js-menuToggleClose').on( 'click', function(e) {
      e.stopPropagation();
    });
    /*
    $(window).on('load resize', function() {
      if ( $(window).width() < 800 ) {
        $('.gnavi-list a').on('click', function(e) {
          if ( $menuToggle.hasClass('close') ) {
            $menu.animate({
              left: '-100%'
            },200);
          } else {
            $menu.animate({
              left: '0'
            },200);
          }
          $menuToggle.toggleClass('close');
          $body.toggleClass('menu-open');
        });
      }else{

      }
    });
    */
  }

  function mouseOver() {
    $('.js-hover').hover(function(){
      $(this).attr('src',$(this).attr('src').replace('_off','_on'));
       },function(){
        $(this).attr('src',$(this).attr('src').replace('_on','_off'));
    });
  }


  function onScroll() {
    $('.l-wrapper').waypoint(function(direction) {
      if (direction === 'down') {
        $('#js-pagetop').fadeIn();
        $('.l-header').addClass('header-fixed');
      }
      if (direction === 'up') {
        $('#js-pagetop').fadeOut();
        $('.l-header').removeClass('header-fixed');
      }
    }, {
      offset: -200
    });
  }

  function home_menu_scroll() {
    var $win = $(window),
        $main = $('main'),
        $nav = $('.home-menu'),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = 'is-fixed';

    $win.on('load scroll', function() {
      
      var value = $(this).scrollTop();
      if ( value > navPos ) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    });
  }

  function openSubMenu() {

      if ( $(window).width() < 800 ) {
        $('#js-menu').css('display','none');
        if($('#js-menuToggle').hasClass('close')) {
          $('#js-menuToggle').removeClass('close');
          $body.removeClass('menu-open');
        }
      } else {
        $('#js-menu').css('display','block');
      }
  }

    function reform_flow_toggle() {

      $(".index-reform_flow_list_tlt_s").on("click", function() {
        $(this).next().slideToggle();
      });


    }
  function accordion() {
    $('.js-accordion-block').hide();
    $('.js-accordion').on("click", function() {
      if ($(this).next().is(':visible')) {
        $(this).next().slideUp();
        $(this).removeClass('open');

      } else {
        $('.js-accordion-block').slideUp();
        $(this).next().slideDown();
        $('.js-accordion').not($(this)).removeClass('open');
        $(this).addClass('open');
      }
    });
  }




  mouseOver();
  anchorLink();
  navControl();
  onScroll();
  slider();
  spChildnav();
  accordion();
  reform_flow_toggle();
  home_menu_scroll();


  // fire when page is fully loaded
  $(window).on('load', function() {
  });

  $(window).on('resize', function() {

  }).trigger('resize');


  //resize
  var currentWidth = window.innerWidth;
  window.addEventListener("resize", function() {
    if (currentWidth == window.innerWidth) {
        // ウインドウ横幅が変わっていないため処理をキャンセル。
        return;
    }

    // ウインドウ横幅が変わったのでリサイズと見なす。
    // 横幅を更新
    currentWidth = window.innerWidth;
    winSize = window.innerWidth;
    openSubMenu();
  });





});
