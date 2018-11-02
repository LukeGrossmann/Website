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
  var nexial = $('.Nexial');

  bce.on('mouseenter', function(){
    $('<div class="BCE-content"> <p><i class="far fa-hand-point-right"></i> Redeveloped the BCE web platform to optimize functionality and security (Secure Sockets Layer implementation).<br/><i class="far fa-hand-point-right"></i> Redesigned the U/I/U/X.<br/><i class="far fa-hand-point-right"></i> Responsible for testing servers/processes, deployment and version control.</p></div>').appendTo('.BCE');
  });
  nexial.on('mouseenter', function(){
    $('<div class="Nexial-content"> <p><i class="far fa-hand-point-right"></i> Designed and implemented backend architecture for application. Ensured compliance with standards.<br/><i class="far fa-hand-point-right"> </i> Researched new support technologies for development goals.<br/><i class="far fa-hand-point-right"></i> Tracked and solved tickets for defects on bug reporting tool (JIRA).<br/><i class="far fa-hand-point-right"></i> Used PUTTY to connect to my remote files in a server securely using SSH Encryption (public key and private key).</p></div>').appendTo('.Nexial');
  });
  nexial.on('mouseleave', function() {
    $('.Nexial-content').slideUp(800);
  });
  bce.on('mouseleave', function() {
    $('.BCE-content').slideUp(800);
  });


}).call(this);
