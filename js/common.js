$('.hamburger').click(function() {
    setTimeout(function() { $('.navigation').fadeIn(100) }, 100);
    $('.navigation-list').animate({left: 0},500);
});

$('.btn-nav-close').click(function() {
    $('.navigation-list').animate({left: -324},500);
    setTimeout(function() { $('.navigation').fadeOut(100) }, 400);
    //
});

$('.link-logo').click(function () {
    $("body,html").animate({"scrollTop":0},700);
});

$(document).ready(function (){
  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-msc', {
      center:[55.708904, 37.652705],
      zoom:16
    });

    myMap.controls
      .add('zoomControl', { left: 15, top: 15 });

    myPlacemark = new ymaps.Placemark([55.708354, 37.652705
  ], {
    }, {
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [201, 160],
      iconImageOffset: [-60, -160]
    });

    myMap.geoObjects.add(myPlacemark);
  };
});

$(document).ready(function (){
  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-spb', {
      center:[59.923224, 30.441875],
      zoom:16
    });

    myMap.controls
      .add('zoomControl', { left: 15, top: 15 });

    myPlacemark = new ymaps.Placemark([59.922724, 30.441875
  ], {
    }, {
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [201, 160],
      iconImageOffset: [-60, -160]
    });

    myMap.geoObjects.add(myPlacemark);
  };

});

/* Changing of maps */

$(document).ready(function() {
  if($('.contacts').hasClass('contacts-spb')) {
    $('#map-msc').css('display', 'none');
    $('#map-spb').css('display', 'block');
    $('.contacts-content').prepend('<p class="contacts-title"><b>ГК "КОМПЛЕКТ СЕРВИС" <br>в Санкт-Петербурге  </b></p><p class="contacts-info"><b>Адрес офиса:</b> г. Санкт-Петербург, <br>ул. Ворошилова, 2, Деловой Центр "ОХТА"</p><p class="contacts-info"><b>Адрес склада:</b> г. Санкт-Петербург, <br>ул. Дорога на Петрославянку, д. 5</p><p class="contacts-info"><b>Адрес производства:</b> г. Санкт-Петербург, <br>Кингисепское ш., 53</p><p class="contacts-info"><b>Телефон:</b> +7(812) 627-15-16</p>');
  }
  if($('.contacts').hasClass('contacts-msc')) {
    $('#map-spb').css('display', 'none');
    $('#map-msc').css('display', 'block');
    $('.contacts-content').prepend('<p class="contacts-title"><b>ГК "КОМПЛЕКТ СЕРВИС" <br>в Москве  </b></p><p class="contacts-info"><b>Адрес офиса:</b> г. Москва, ул. Ленинская Слобода, д.19, БЦ "Омега Плаза"</p><p class="contacts-info"><b>Адрес склада:</b> г. Электросталь, Промышленный проезд, д.11, корпус 11. (Въезд с 9.00 до 16.30 ч.)</p><p class="contacts-info"><b>Телефон:</b> +7 (495) 205-60-07</p>');
  }
});
$('.btn-contacts-spb').click(function(){
  if ($('.contacts').hasClass('contacts-spb')) {
    return;
  } else {
      $('#map-msc').css('display', 'none');
      $('#map-spb').fadeIn();
      $('.map .contacts').addClass('contacts-spb').removeClass('contacts-msc');
      $('.contacts-content').empty().prepend('<p class="contacts-title"><b>ГК "КОМПЛЕКТ СЕРВИС" <br>в Санкт-Петербурге  </b></p><p class="contacts-info"><b>Адрес офиса:</b> г. Санкт-Петербург, <br>ул. Ворошилова, 2, Деловой Центр "ОХТА"</p><p class="contacts-info"><b>Адрес склада:</b> г. Санкт-Петербург, <br>ул. Дорога на Петрославянку, д. 5</p><p class="contacts-info"><b>Адрес производства:</b> г. Санкт-Петербург, <br>Кингисепское ш., 53</p><p class="contacts-info"><b>Телефон:</b> +7(812) 627-15-16</p>');
  }
});
$('.btn-contacts-msc').click(function(){
  if ($('.contacts').hasClass('contacts-msc')) {
    return;
  } else {
    $('#map-spb').css('display', 'none');
    $('#map-msc').fadeIn();
    $('.map .contacts').addClass('contacts-msc').removeClass('contacts-spb');
    $('.contacts-content').empty().prepend('<p class="contacts-title"><b>ГК "КОМПЛЕКТ СЕРВИС" <br>в Москве  </b></p><p class="contacts-info"><b>Адрес офиса:</b> г. Москва, ул. Ленинская Слобода, д.19, БЦ "Омега Плаза"</p><p class="contacts-info"><b>Адрес склада:</b> г. Электросталь, Промышленный проезд, д.11, корпус 11. (Въезд с 9.00 до 16.30 ч.)</p><p class="contacts-info"><b>Телефон:</b> +7 (495) 205-60-07</p>');
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
