$(document).ready(function(){
  $("button").click(function(){
    var target = $(this).attr("href");
    $(".content").not(target).hide();
    $(target).show("slow");
  });

  var cw = $('.project').width();
  $('.project').css({'height':cw+'px'});

  $("#first").click();

  $("#landing-2").scroll(function(){
    this.css({
      'position':'fixed'
    });
  });

});
