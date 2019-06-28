$('.btn_nav').click(function() {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.home_link').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.ancient_link').click(function() {
  setTimeout(function() {
    $('.ancient').addClass('fadeIn');
  }, 1500);
});

$('.photo_link').click(function() {
  setTimeout(function() {
    $('.photography').addClass('fadeIn');
  }, 1500);
});

$('.african_link').click(function() {
  setTimeout(function() {
    $('.african').addClass('fadeIn');
  }, 1500);
});

$('.native_link').click(function() {
  setTimeout(function() {
    $('.native').addClass('fadeIn');
  }, 1500);
});

$('.euro_link').click(function() {
  setTimeout(function() {
    $('.euro').addClass('fadeIn');
  }, 1500);
});

$('.kentucky_link').click(function() {
  setTimeout(function() {
    $('.kentucky').addClass('fadeIn');
  }, 1500);
});
