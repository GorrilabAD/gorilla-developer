$(function () {
  let $tasksList = $("#tasksList");
  let $taskInput = $("#taskInput");
  let $notification = $("#notification");

  let displayNotification = function () {
    if(!$tasksList.children().length) {
      $notification.fadeIn("fast");

    } else {
      $notification.css("display", "none");
    }
  }
  $("#taskAdd").on("click", function () {
    if(!$taskInput.val()) {return false;}

    $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");

    $taskInput.val("");

    displayNotification();

    $(".delete").on('click', function () {
      var $parent = $(this).parent();
      $parent.css("animation" , "fadeOut .3s");

      setTimeout(function () {
        $parent.remove();

        displayNotification();
      },295);
    });
  });


});
