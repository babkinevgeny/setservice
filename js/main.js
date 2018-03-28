// $("body").onepage_scroll({
//    sectionContainer: ".onepage-scroll",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                     // the browser's width is less than 600, the fallback will kick in.
//    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
// });

// $(document).ready( function() {
// 	var slider = $.fn.fsvs({
// 		speed : 1000,
// 		bodyID : 'fsvs-body',
// 		selector : '> .onepage-scroll',
// 		mouseSwipeDisance : 40,
// 		afterSlide : function(){},
// 		beforeSlide : function(){},
// 		endSlide : function(){},
// 		mouseWheelEvents : true,
// 		mouseWheelDelay : false,
// 		scrollableArea : 'scrollable',
// 		mouseDragEvents : true,
// 		touchEvents : true,
// 		arrowKeyEvents : true,
// 		pagination : true,
// 		nthClasses : false,
// 		detectHash : true
// 	});
// 	//slider.slideUp();
// 	//slider.slideDown();
// 	//slider.slideToIndex( index );
// 	//slider.unbind();
// 	//slider.rebind();
// });

// //jQuery is required to run this code
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

$(document).on('click touchstart', '.mouse', function(){
      var hei = $(document).find('.page-header').outerHeight();
      if($(window).height() >= 992) {
        console.log("я длиный экран");
        $('html, body').animate({ scrollTop: hei+37}, 500);
      } else {
        console.log("я короткий экран");
        $('html, body').animate({ scrollTop: hei-81}, 500);
      }
});

window.onscroll = function() {
		  if ($(document).scrollTop()>=300) {
				$('.page-header .title-header').css('padding-top', '298px');
				var newHei = $(window).height() - 33;
				$('.page-header ').css('height', newHei+'px');
		    $('.menu').addClass('fixed');
		  } else {
				$('.page-header .title-header').css('padding-top', '0px');
				$('.page-header ').css('height', '100vh');
		    $('.menu').removeClass('fixed');
		  }
		$(window).scroll(function(){
			  //ss = $(document).height()-$(document).scrollTop();
			  if ($(document).scrollTop()>=300) {
					$('.page-header .title-header').css('padding-top', '298px');
					var newHei = $(window).height() - 33;
					$('.page-header ').css('height', newHei+'px');
			    $('.menu').addClass('fixed');
			  } else {
					$('.page-header .title-header').css('padding-top', '0px');
					$('.page-header ').css('height', '100vh');
			    $('.menu').removeClass('fixed');
			  }
		});
}

// while(true) {
//   $(document).find('.mouse .mouse-dot').stop()
//     .css({ top : 10, left : 11, opacity : 1 })
//     .delay(200)
//   //   .animate({ top : 29, opacity : 0 },1500,'swing',function(){
//   // $(this).css({ top : 10 })
//   // .animate({ opacity : 1 },500,'swing',function(){ aniamate(); });
// };
// animate();
// };

(function($){
	$.fn.percentPie = function(options){

		var settings = $.extend({
			width: 100,
			trackColor: "F1C40F",
			barColor: "777777",
			barWeight: 30,
			startPercent: 0,
			endPercent: 1,
			fps: 60
		}, options);

		this.css({
			width: settings.width,
			height: settings.width
		});

		var that = this,
			hoverPolice = false,
			canvasWidth = settings.width,
			canvasHeight = canvasWidth,
			id = $('canvas').length,
			canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
			canvas = canvasElement.get(0).getContext("2d"),
			centerX = canvasWidth/2,
			centerY = canvasHeight/2,
			radius = settings.width/2 - settings.barWeight/2;
			counterClockwise = false,
			fps = 1000 / settings.fps,
			update = .01;
			this.angle = settings.startPercent;

		this.drawArc = function(startAngle, percentFilled, color){
			var drawingArc = true;
			canvas.beginPath();
			canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
			canvas.strokeStyle = color;
			canvas.lineWidth = settings.barWeight;
			canvas.stroke();
			drawingArc = false;
		}

		this.fillChart = function(stop){
			var loop = setInterval(function(){
				hoverPolice = true;
				canvas.clearRect(0, 0, canvasWidth, canvasHeight);

				that.drawArc(0, 360, settings.trackColor);
				that.angle += update;
				that.drawArc(settings.startPercent, that.angle, settings.barColor);

				if(that.angle > stop){
					clearInterval(loop);
					hoverPolice = false;
				}
			}, fps);
		}

		this.mouseover(function(){
			if(hoverPolice == false){
				that.angle = settings.startPercent;
				that.fillChart(settings.endPercent);
			}
		});

		this.fillChart(settings.endPercent);
		this.append(canvasElement);
		return this;
	}
}(jQuery));

$(document).ready(function() {

	$('.statistic-chart-first').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#f9b407",
		barWeight: 20,
		endPercent: .2,
		fps: 30
	});

  $('.statistic-chart-second').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#f7c20a",
		barWeight: 20,
		endPercent: .4,
		fps: 30
	});

  $('.statistic-chart-third').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#fbd414",
		barWeight: 20,
		endPercent: .5,
		fps: 30
	});

  $('.statistic-chart-fourth').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#f9db17",
		barWeight: 20,
		endPercent: .7,
		fps: 30
	});

  $('.statistic-chart-fifth').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#f7e524",
		barWeight: 20,
		endPercent: .8,
		fps: 30
	});

  $('.statistic-chart-sixth').percentPie({
		width: 170,
		trackColor: "#5b5b5b",
		barColor: "#f7e524",
		barWeight: 20,
		endPercent: .9,
		fps: 60
	});

});
