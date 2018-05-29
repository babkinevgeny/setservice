$('#input-file').change(function() {
  if ($(this).val() != '') $(this).prev().text('Файл загружен');
  else $(this).prev().text('Загрузить файл');
});

$('.hamburger').click(function() {
  $('.navigation').slideDown().css('display','flex');
});

$('.btn-nav-close').click(function() {
  $('.navigation').slideUp();
});

$('.link-logo').click(function () {
    if($(this).prop('tagName') == 'A' && $(this).parent().parent().offset().top > 0) {
      event.preventDefault();
      $("body,html").animate({"scrollTop":0},700);
    }
    if($(this).prop('tagName') !== 'A' && $(this).parent().parent().offset().top > 0) {
      $("body,html").animate({"scrollTop":0},700);
    }
});


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

$('.btn-text-send').click(function() {
    $('.popupform').slideDown().css('display','flex');
});

$('.btn-form-close').click(function() {
    $('.popupform').slideUp();
});

$( document ).ready(function() {
  $('.catalog-title-active').children(".inner-list").css("display", "block");
});
$('.catalog-title-inner').click( function () {
  if( $(this).hasClass('catalog-title-inner-active') ) {
    $(this).removeClass('catalog-title-inner-active');
    $(this).siblings(".inner-list").slideUp();
    $(this).children('.switch').removeClass('switch-checked');
  } else {
    $('.catalog-title-inner.catalog-title-inner-active').siblings(".inner-list").slideUp();
    $('.catalog-title-inner.catalog-title-inner-active').children('.switch').removeClass('switch-checked');
    $('.catalog-title-inner.catalog-title-inner-active').removeClass('catalog-title-inner-active');
    $(this).addClass('catalog-title-inner-active').siblings(".inner-list").slideDown();
    $(this).children(".switch").addClass('switch-checked');
  }
});

(function($){
	$(function(){
		var oTop,
			wH,
			b = $('.catalog-wrapper'),
			bTopI = b.offset().top,
			bBotI = bTopI + b.outerHeight(),
			footTop = $('.page-footer').offset().top;
		$(window).resize(function(){
			wH = window.innerHeight;
		}).resize().bind('scroll', function(){
			var bTop = b.offset().top
			var bH = b.outerHeight(true);
			var bBot = bTop + bH;
			var wTop = window.pageYOffset;
			var wBot = wTop + wH;

			if (bBot < wBot && wBot < footTop) {
				b.css({
					top: wBot - bH
				})
			} else if(wBot > footTop) {
				b.css({
					top: footTop - bH - 2
				})
			} else if (wTop + bTopI < bTop) {
				b.css({
					top: wTop + bTopI
				})
			}
		}).scroll();
	});
})(jQuery);


var doArticleFormSubmit = function () {
  $('#article-form').ajaxSubmit({
    type:"POST",
    data: $('#article-form').serialize(),
    url:"/mail1.php",
    success: function() {
      $('.thanks').fadeIn().css('display', 'flex');
      setTimeout(function() {
        $('.thanks').fadeOut();
      }, 3000);
    },
    error: function() {
      alert("Error");
    }
  });
};

$(function(){

    $('#article-form').validate({
      rules: {
        organization: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        tel: {
          required: true,
          digits: true
        },
        message: {
          required: true
        }
      },
      messages: {
        organization: {
          required: 'Это поле обязательно для заполнения'
        },
        email:{
          required: 'Это поле обязательно для заполнения',
          email: 'Введите email в верном формате'
        },
        tel: {
          required: 'Это поле обязательно для заполнения',
          digits: 'Поле может содержать только цифры'
        },
        message: {
          required: 'Это поле обязательно для заполнения'
        }
      },
      submitHandler: function(form) {
        grecaptcha.execute();
      }
    });
});

var doPopupFormSubmit = function(){
  $(".popupform form").ajaxSubmit({
    type:"POST",
    data: $(".popupform form").serialize(),
    url:"/mail1.php",
    success: function() {
      $('.popupform-thanks').fadeIn().css('display', 'flex');
      setTimeout(function() {
        $('.popupform-thanks').fadeOut();
      }, 3000);
    },
    error: function() {
      alert("Error");
    }
  });
};
