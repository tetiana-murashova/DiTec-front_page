$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });


  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 650) {
      $('.comp-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
      $('.my').addClass('opasityadd');
    } else {
      $('.comp-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });


});
































