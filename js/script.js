
$(document).ready(function() {


  /*******************************
  **** FULL SCREEN NAVIGATION ****
  ********************************/
  $('#menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.logo').toggleClass('logo-menu-open');
    $('.menu-overlay').toggleClass('open');
  });

  /*******************************
  ****     ANIMATED MODAL     ****
  ********************************/

  // PROJECT 1
  $("#project-1").animatedModal({
      modalTarget:'modal-project-1',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterClose: function() {
        $('#modal-project-1').scrollTop(0);
      }

  });

  // PROJECT 2
  $("#project-2").animatedModal({
      modalTarget:'modal-project-2',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterClose: function() {
        $('#modal-project-2').scrollTop(0);
      }

  });

  // PROJECT 3
  $("#project-3").animatedModal({
      modalTarget:'modal-project-3',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterClose: function() {
        $('#modal-project-3').scrollTop(0);
      }
  });

});
