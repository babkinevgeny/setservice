$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

/*Проверяем расстояние от верха окна. Если больше 300рх - показываем меню*/
// $(function(){
//   if($(window).s.crollTop() >= 300) {
//     $('.menu-fixed').css('display', 'flex');
//   }
// });
/*Показ меню при скроллинге*/
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled >= 300) {
    $('.menu-fixed').slideDown();
  }
  if (scrolled < 300) {
    $('.menu-fixed').slideUp();
  }
}


$('.mouse').click(function () {
   var heightHeader = $('.page-header').height();
    $("body,html").animate({"scrollTop":heightHeader-75},700);
});

$(function(){
	 	var aniamate = function(){
			$(document).find('.mouse .mouse-dot').stop()
			.css({ top : 10, left : 11, opacity : 1 })
			.delay(200)
			.animate({ top : 29, opacity : 0 },1500,'swing',function(){
				$(this).css({ top : 10 })
				.animate({ opacity : 1 },500,'swing',function(){ aniamate(); });
			});
	 	}
		aniamate();
});



/*Owl carousel*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        650:{
            items:3,
            nav:true
        }
    },
    dots: false,
    center: true,
    autoplay: false
})
});

/*Magnific popup*/
$(document).ready(function() {
  $('.item-link').magnificPopup({
    type:'image',
    gallery: {
      enabled: true, // set to true to enable gallery

      preload: [0,2], // read about this option in next Lazy-loading section

        navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  },
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'


  });
});
