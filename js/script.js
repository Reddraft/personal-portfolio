$(document).ready(function() {

/*******************************
**** FULL SCREEN NAVIGATION ****
********************************/
$('#menu-toggle').click(function() {
  $(this).toggleClass('active');
  $('.logo').toggleClass('logo-menu-open');
  $('.menu-overlay').toggleClass('open');
});


});
