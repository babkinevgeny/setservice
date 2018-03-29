$('.questions-title').click(function() {
  if($(this).siblings('.questions-item-content').hasClass('questions-item-content-show')) {
    $(this).siblings('.questions-item-content').slideUp().removeClass('questions-item-content-show');
  } else {
    $(this).siblings('.questions-item-content').slideDown().addClass('questions-item-content-show');
  }
});
