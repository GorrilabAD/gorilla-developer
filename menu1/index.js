/*$(document).ready(function () {
  function changeClass() {
    $(this).prev().toggleClass('active')
  }
    $(function () {
      $('article h2').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active') ;
    });
  });



});
//Развернуть и свернуть по клику.))*/
$(document).ready(function () {
  (function ($) {
    $(function () {
      $('.icon').on('click', function () {
        $(this).closest('.menu').toggleClass('menu-open');
      });
    });
  })(jQuery);







});
