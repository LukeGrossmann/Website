// $(document).ready(function () {

//   $("#footer").click(function(){
//       window.location.href = "/index_fall_winter";
//   });

// });

$(document).ready(function() {

   var footer = $("#footer");
   footer.hide();
   footer.delay(10000).fadeIn(1500);

    $('#toggle-imprint-game').on('click', function () {
      $('#bio, #lab, #resume').removeClass("active show");
      $('#game').addClass("active show");
    });
    $('#toggle-imprint-resume').on('click', function () {
      $('#game, #bio, #lab').removeClass("active show");
      $('#resume').addClass("active show");
    });
    $('#toggle-imprint-bio').on('click', function () {
      $('#game, #lab, #resume').removeClass("active show");
      $('#bio').addClass("active show");
    });
    $('#toggle-imprint-lab').on('click', function () {
      $('#game, #bio, #resume').removeClass("active show");
      $('#lab').addClass("active show");
    });
});
