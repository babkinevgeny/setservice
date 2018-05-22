$('.dropdown-title').click(function() {
  if($(this).siblings('.container').children('.dropdown-item-content').is(':visible')) {
    $(this).children('.container').children('.switch').removeClass('switch-checked');
    $(this).siblings('.container').children('.dropdown-item-content').slideUp();
    $(this).siblings('.container').css('border-bottom', 'none');
  } else {
    $(this).children('.container').children('.switch').addClass('switch-checked');
    $(this).siblings('.container').children('.dropdown-item-content').slideDown();
    $(this).siblings('.container').css('border-bottom', '1px solid #ddd');
  }
});




$('.questions-title').click(function() {
  if($(this).siblings('.container').children('.questions-item-content').hasClass('questions-item-content-show')) {
    $(this).children('.container').children('.questions-title-icon').css('background', 'url("img/plus.svg") no-repeat center center');
    $(this).siblings('.container').children('.questions-item-content').slideUp().removeClass('questions-item-content-show');
  } else {
    $(this).children('.container').children('.questions-title-icon').css('background', 'url("img/minus.svg") no-repeat center center');
    $(this).siblings('.container').children('.questions-item-content').slideDown().addClass('questions-item-content-show');
  }
});
