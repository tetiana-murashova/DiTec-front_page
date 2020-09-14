$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });


  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 780) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
      $('.gallery').addClass('change');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
      $('.gallery').removeClass('change');
    }
  });


});
































