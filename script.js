jQuery(document).ready(function($){
  $('.arrow_a').click(function() {
    $('html').animate({
      scrollTop: $('.intro').height() + 35
    }, 1000)
  })
});
