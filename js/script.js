WebFontConfig = {
  google: {
    families: ['Roboto:400,300,500,700:latin,cyrillic']
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

jQuery(document).ready(function($) {
  var options = {
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $ChanceToShow: 2
    }
  };
  var jssor_slider1 = new $JssorSlider$('slider1_container', options);
  //responsive code begin
  //you can remove responsive code if you don't want the slider scales
  //while window resizes
  function ScaleSlider() {
    var parentWidth = $('.wide-wrapper').width();
    if (parentWidth) {
      jssor_slider1.$ScaleWidth(parentWidth);
    } else
      window.setTimeout(ScaleSlider, 30);
  }
  //Scale slider after document ready
  ScaleSlider();

  //Scale slider while window load/resize/orientationchange.
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});

$(document).ready(function(){
  $('.slider-label__circle').hover(function() {
    $(this).nextAll('img').fadeTo('normal', 0.3);
    $(this).children('.slider-label__text').fadeIn('slow');
}, function() {
    $(this).nextAll('img').fadeTo('normal', 1);
    $(this).children('.slider-label__text').fadeOut('slow');
});
});
