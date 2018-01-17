$(window).ready(function () {
  let wHeight = $(window).height();
  $('.slide')
  .height(wHeight)
  .scrollie({
    scrollOffset: -20,
    scrollingInView: function (elem) {
      let bgColor = elem.data('background');
      $('body').css('background-color', bgColor);
    }
  })
});
