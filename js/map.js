/*Карты для остальных файлов*/
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


/* Заполнение адресов карт в других документах */
$(document).ready(function() {
  var schedule = '<ul class="schedule"><li class="schedule-item"><span class="schedule-title">пн</span><span class="schedule-square"></span></li><li class="schedule-item"><span class="schedule-title">вт</span><span class="schedule-square"></span></li><li class="schedule-item"><span class="schedule-title">ср</span><span class="schedule-square"></span></li><li class="schedule-item"><span class="schedule-title">чт</span><span class="schedule-square"></span></li><li class="schedule-item"><span class="schedule-title">пт</span><span class="schedule-square"></span></li><li class="schedule-item schedule-item-holiday"><span class="schedule-title">сб</span><span class="schedule-square"></span></li><li class="schedule-item schedule-item-holiday"><span class="schedule-title">вс</span><span class="schedule-square"></span></li></ul>'
  if($('.contacts').hasClass('contacts-spb')) {
    $('#map-msc').css('display', 'none');
    $('#map-spb').css('display', 'block');
    $('.contacts-content').prepend('<p class="contacts-title"><b>Set Service Group <br>в Санкт-Петербурге  </b></p><p class="contacts-info contacts-info-schedule" style="margin-bottom: 5px;"><b>Режим работы:</b></p>' + schedule + '<p class="contacts-info">9:00 - 18:00</p><p class="contacts-info contacts-info-office"><b>Адрес офиса:</b> г. Санкт-Петербург, <br>ул. Ворошилова, 2, Деловой Центр "ОХТА"</p><p class="contacts-info contacts-info-factory"><b>Адрес производства:</b> г. Санкт-Петербург, <br>Кингисепское ш., 53</p><p class="contacts-info contacts-info-telephone"><b>Телефон:</b> +7(812) 627-15-16</p><p class="contacts-info contacts-info-email"><b>E-mail:</b> info@setservice24.ru</p>');
  }
  if($('.contacts').hasClass('contacts-msc')) {
    $('#map-spb').css('display', 'none');
    $('#map-msc').css('display', 'block');
    $('.contacts-content').prepend('<p class="contacts-title"><b>Set Service Group <br>в Санкт-Петербурге  </b></p><p class="contacts-info contacts-info-schedule" style="margin-bottom: 5px;"><b>Режим работы:</b></p>' + schedule + '<p class="contacts-info">9:00 - 18:00</p><p class="contacts-info contacts-info-office"><b>Адрес офиса:</b> г. Москва, ул. Ленинская Слобода, д.19, БЦ "Омега Плаза"</p><p class="contacts-info contacts-info-telephone"><b>Телефон:</b> +7 (495) 205-60-07</p><p class="contacts-info contacts-info-email"><b>E-mail:</b> info@setservice24.ru</p>');
  }

  $('.btn-contacts-spb').click(function(){
    if ($('.contacts').hasClass('contacts-spb')) {
      return;
    } else {
        $('#map-msc').css('display', 'none');
        $('#map-spb').fadeIn();
        $('.map .contacts').addClass('contacts-spb').removeClass('contacts-msc');
        $('.contacts-content').empty().prepend('<p class="contacts-title"><b>Set Service Group <br>в Санкт-Петербурге  </b></p><p class="contacts-info contacts-info-schedule" style="margin-bottom: 5px;"><b>Режим работы:</b></p>' + schedule + '<p class="contacts-info">9:00 - 18:00</p><p class="contacts-info contacts-info-office"><b>Адрес офиса:</b> г. Санкт-Петербург, <br>ул. Ворошилова, 2, Деловой Центр "ОХТА"</p><p class="contacts-info contacts-info-factory"><b>Адрес производства:</b> г. Санкт-Петербург, <br>Кингисепское ш., 53</p><p class="contacts-info contacts-info-telephone"><b>Телефон:</b> +7(812) 627-15-16</p><p class="contacts-info contacts-info-email"><b>E-mail:</b> info@setservice24.ru</p>');
    }
  });
  $('.btn-contacts-msc').click(function(){
    if ($('.contacts').hasClass('contacts-msc')) {
      return;
    } else {
      $('#map-spb').css('display', 'none');
      $('#map-msc').fadeIn();
      $('.map .contacts').addClass('contacts-msc').removeClass('contacts-spb');
      $('.contacts-content').empty().prepend('<p class="contacts-title"><b>Set Service Group <br>в Санкт-Петербурге  </b></p><p class="contacts-info contacts-info-schedule" style="margin-bottom: 5px;"><b>Режим работы:</b></p>' + schedule + '<p class="contacts-info">9:00 - 18:00</p><p class="contacts-info contacts-info-office"><b>Адрес офиса:</b> г. Москва, ул. Ленинская Слобода, д.19, БЦ "Омега Плаза"</p><p class="contacts-info contacts-info-telephone"><b>Телефон:</b> +7 (495) 205-60-07</p><p class="contacts-info contacts-info-email"><b>E-mail:</b> info@setservice24.ru</p>');
    }
  });
});

/* Переключение карты в других документах */
