$('.dropdown-title .container').click(function() {
  if($(this).parent().siblings('.container').children('.dropdown-item-content').hasClass('dropdown-item-content-show')) {
    $(this).parent().siblings('.container').children('.dropdown-item-content').slideUp().removeClass('dropdown-item-content-show');
  } else {
    $(this).parent().siblings('.container').children('.dropdown-item-content').slideDown().addClass('dropdown-item-content-show');
  }
});

$('.questions-title .container').click(function() {
  if($(this).parent().siblings('.container').children('.questions-item-content').hasClass('questions-item-content-show')) {
    $(this).parent().siblings('.container').children('.questions-item-content').slideUp().removeClass('questions-item-content-show');
  } else {
    $(this).parent().siblings('.container').children('.questions-item-content').slideDown().addClass('questions-item-content-show');
  }
});
