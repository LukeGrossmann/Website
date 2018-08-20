(function() {
  $('.skills-prog li').find('.skills-bar').each(function(i) {
    $(this).find('.bar').delay(i * 150).animate({
      width: $(this).parents().attr('data-percent') + '%'
    }, 1000, 'linear', function() {
      return $(this).css({
        'transition-duration': '.5s'
      });
    });
  });

  $('.skills-soft li').find('svg').each(function(i) {
    var c, cbar, circle, percent, r;
    circle = $(this).children('.cbar');
    r = circle.attr('r');
    c = Math.PI * (r * 2);
    percent = $(this).parent().data('percent');
    cbar = ((100 - percent) / 100) * c;
    circle.css({
      'stroke-dashoffset': c,
      'stroke-dasharray': c
    });
    circle.delay(i * 150).animate({
      strokeDashoffset: cbar
    }, 1000, 'linear', function() {
      return circle.css({
        'transition-duration': '.3s'
      });
    });
    $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
      Counter: percent
    }, {
      duration: 1000,
      step: function(now) {
        return $(this).text(Math.ceil(now) + '%');
      }
    });
  });

  var bce = $('.BCE');

  bce.on('mouseenter', function(){
    $('<div class="BCE-content"> <p>Redeveloping the BCE web platform to optimize functionality and security (Secure Sockets Layer implementation) while redesigning the U/I, U/X. Responsible for testing servers/processes, deployment and version control as well as managing all aspects of the project. While employed in this position I broadened my skill-set by utilizing environments and platforms that were unfamiliar to me as well as furthered my depth within technical tools that I have previously been comfortable with.</p></div>').appendTo('.BCE');

  });
  bce.on('mouseleave', function() {
    $('.BCE-content').slideUp(800);
  });


}).call(this);
