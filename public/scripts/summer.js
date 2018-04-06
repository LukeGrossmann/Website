var date = new Date();
var date_month = date.getMonth()

if (date.getMonth() > 3 && date.getMonth() <= 7 ) {
  $('#landing-2').css('background-image', "");
  $('#landing-2').css('background-image', 'url(../photos/Summer-landing.jpg)', 'no-repeat', 'center', 'center');
  $('#portfolio-2').css('background-image', "");
  $('#portfolio-2').css('background-image', 'url(../photos/summer-portfolio.jpg)', 'no-repeat', 'center', 'center');
  $('.welcome-background').css('background-image', "");
  $('.welcome-background').css('background-image', 'url(../photos/summer-welcome-screen.jpg)');
  $('.background-background').css('background-image', "");
  $('.background-background').css('background-image', 'url(../photos/summer-background2.jpg)');
  $('.cover-photo').css('background-image', "");
  $('.cover-photo').css('background-image', 'url(../photos/Summer-bio3.jpg)');
  $('.first-text').css('padding-left', '0.85em');
  $('.first-text').css('padding-top', '0.5em');
  $('.middle-letter').css('color', 'black');
  $('.overlay-loading').css('background', "");
  $('.overlay-loading').css('background', 'radial-gradient(#67f5c7, #aee3f5)');
  $('.resume .base .follow .box i').css('background', '')
  $('.resume .base .follow .box i').css('background', 'lightblue')
  $('.resume .base .follow .box a i').hover(function() {
    $(this).after().css('backgorund', '')
    $(this).after().css('background', 'lightcoral')
  }, function () {
    $(this).css('background', 'lightblue');
  });

  $('.h2-bio').css('color', '');
  $('.h2-bio').css('color', '#19f6e8');
  $('blockquote').css('border-top', '');
  $('blockquote').css('border-bottom', '');
  $('blockquote').css('border-bottom', '5px solid #19f6e8');
  $('blockquote').css('border-top', '5px solid #19f6e8');

$('.project-list .project-card').hover(function(){
  $(this).after().css('box-shadow', '0px 4px 8px -1px #19f6e8')
}, function () {
  $(this).css('box-shadow', '')
})






}

