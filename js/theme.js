// mobile toggle button 

$('.togg-btn').click(function(){
  $(this).toggleClass('bg-theme-yellow');
    $('.togg-btn .line').toggleClass('active');
    $('.navi span').toggleClass('active');
    $('.navi .mob-toggle-menu').toggleClass('active');
    $('.navi .mob-toggle-menu .mob-menu').toggleClass('active');
    $('.mob-side-nav-container .mob-nav-list ul li').toggleClass('active');
    $('.mob-side-nav-container').toggleClass('active');
})

// reset click 


$('.navi .mob-toggle-menu .mob-menu .mob-item a').click(function(){
  $('.togg-btn.bg-theme-yellow').click();
})

// banner slide 

$('.home-slider-container').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    centerPadding: '0px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 40000,
    infinite: true, responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    // video popup 

    $(".vpop").on('click', function(e) {
      e.preventDefault();
      $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
      
      var srchref='',autoplay='',id=$(this).data('id');
      if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
      else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
      
      if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
      
      $("#video-popup-iframe").attr('src', srchref+id+autoplay);
      
      $("#video-popup-iframe").on('load', function() {
        $("#video-popup-container").show();
      });
    });
    
    $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
      $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
      $("#video-popup-iframe").attr('src', '');
    });

//   counter 

var counted = 0;
$(window).scroll(function() {

var oTop = $('.about-counter').offset().top - window.innerHeight;
if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
        },

        {

        duration: 2000,
        easing: 'swing',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
            //alert('finished');
        }

        });
    });
    counted = 1;
}
});

// date picker 

// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );


  // pakages 

  $('.package-items').slick({
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 4000,
    slidesToShow: 3,
    speed: 1000,
    prevArrow: '<i class="fa-solid fa-chevron-left slick-prev"><img src="img/home/arrow-left.png"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slick-next"><img src="img/home/arrow-right.png"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // testimonial 

  $('.tralvr-row').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<i class="fa-solid fa-chevron-left slick-prev"><img src="img/home/arrow-left.png"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slick-next"><img src="img/home/arrow-right.png"></i>',
  });

  // sponser

  $('.sponser-row').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
      speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Gallery Slider

$(document).ready(function() {
  $('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    mainClass: 'mfp-with-zoom', 
    zoom: {
      enabled: true, 
      duration: 300,
      easing: 'ease-in-out',
    },
    gallery:{
      enabled: true
    }
  });
});

// Gallery Slider another demo 


$(document).ready(function(){
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery:{
        enabled:true
      },
  
    zoom: {
      enabled: true, 
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      opener: function(openerElement) {
  
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
  });
  
  });