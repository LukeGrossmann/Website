$(document).ready(function () {

  $(".overlay-loading")

  $(window).on("load", function() {

    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }

    preloadImages(["../photos/landscape2.jpg", "../photos/panoH@W.jpg", "../photos/blue.jpg"]);

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
      $(".overlay-loading").delay(2000).fadeOut("slow", function () {
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
});




