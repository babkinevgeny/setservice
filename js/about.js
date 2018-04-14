$('.dropdown-title').click(function() {
  if($(this).siblings('.container').children('.dropdown-item-content').is(':visible')) {
    $(this).children('.container').children('.dropdown-title-icon').css('background', 'url("img/plus.svg") no-repeat center center');
    $(this).siblings('.container').children('.dropdown-item-content').slideUp();
  } else {
    $(this).children('.container').children('.dropdown-title-icon').css('background', 'url("img/minus.svg") no-repeat center center');
    $(this).siblings('.container').children('.dropdown-item-content').slideDown();
  }
});

$('.questions-title .container').click(function() {
  if($(this).parent().siblings('.container').children('.questions-item-content').hasClass('questions-item-content-show')) {
    $(this).parent().siblings('.container').children('.questions-item-content').slideUp().removeClass('questions-item-content-show');
  } else {
    $(this).parent().siblings('.container').children('.questions-item-content').slideDown().addClass('questions-item-content-show');
  }
});
