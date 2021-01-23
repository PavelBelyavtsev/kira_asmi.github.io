jQuery(document).ready(function($){
  $('.arrow_a').click(function() {
    $('html').animate({
      scrollTop: $('.intro').height()
    }, 1000)
  })
});
