$(document).ready(function() {
    var videobackground = new $.backgroundVideo($('.page-header'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "setservice",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });

});

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
