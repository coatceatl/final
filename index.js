$( document ).ready(function() {
  $('.tabs-item').click(function() {
    $('.tabs-item.active').removeClass('active');
    $(this).addClass('active');

    var currentTab = $(this).attr('rel');

    $('.tabs-panel.active').slideUp(300, function() {
      $(this).removeClass('active');

      $('#'+currentTab).slideDown(300, function() {
        $(this).addClass('active');
      });
    });
  });
});
