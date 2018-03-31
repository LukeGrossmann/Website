
$(function() {

  var dt = new Date().toDateString();
  document.getElementById("datetime").innerHTML = dt;

  var d = new Date();
  var time = d.getHours();

  if (time < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning, User.";
  }
  if (time >= 12 && time < 17) {
    document.getElementById("greeting").innerHTML = "Good Afternoon, User.";
  }
  if (time >= 17) {
    document.getElementById("greeting").innerHTML = "Good Evening, User.";
  }

  function firstFadeIn (callback) {
    $(".overlay-loading").delay(3000).fadeOut("slow", function () {
      $('.welcome-background').fadeIn('slow');
        setTimeout(function() {
        $('.first-text').removeClass('hidden');
  }, 500);
      callback();
    });
  }


  function secondFadeIn () {
    $('.welcome-background').delay(3500).fadeOut("slow", function () {
      $('.background-background').fadeIn("slow");
  $(".remove").remove();

    });
  }

 firstFadeIn(function() {
  secondFadeIn();
 });
});




