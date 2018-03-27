//jQuery is required to run this code
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

$('.hamburger').click(function() {
    $('.navigation').css('display', 'block');
});

$('.btn-nav-close').click(function() {
    $('.navigation').css('display', 'none');
});

while(true) {
  $(document).find('.mouse .mouse-dot').stop()
    .css({ top : 10, left : 11, opacity : 1 })
    .delay(200)
    .animate({ top : 29, opacity : 0 },1500,'swing',function(){
  $(this).css({ top : 10 })
  .animate({ opacity : 1 },500,'swing',function(){ aniamate(); });
});
animate();
};

// var aniamate = function(){
// 			$(document).find('.mouse .dot').stop()
// 			.css({ top : 10, left : 11, opacity : 1 })
// 			.delay(200)
// 			.animate({ top : 29, opacity : 0 },1500,'swing',function(){
// 				$(this).css({ top : 10 })
// 				.animate({ opacity : 1 },500,'swing',function(){ aniamate(); });
// 			});
// 	 	}
// 		aniamate();

		// $(document).on('click touchstart', '.mouse', function(){
		// 	var hei = $(document).find('.slider-4').outerHeight();
		// 	console.log(hei);
