
$(window).ready(function () {
  let show = true;
  $(window).on('scroll', function () {

    if(!show) return false;
    let window_top = $(window).scrollTop();
    let advantages_top = $(".advantages_container").offset().top;


    if(window_top >= 550) {
      $(".advantages_container").animate({opacity:1,},1250,
         function () {
        //animation completed
      });
    } else if (window_top >= 312) {
      $(".index_text").animate({opacity:1, }, 1250,
      function () {
        //animation completed

      });
      $(".index_text_2").animate({opacity:1, }, 1450,
      function () {
        //animation completed

      });
      $(".index_text_3").animate({opacity:1, }, 1650,
      function () {
        //animation completed

      });
    }


  });


});
