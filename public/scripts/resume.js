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
  var fable = $('.fable');
  var bimini = $('.bimini');

  bce.on('mouseenter', function(){
    $('<div class="BCE-content"> <p>Redeveloping the BCE web platform to optimize functionality and security (Secure Sockets Layer implementation) while redesigning the U/I, U/X. Responsible for testing servers/processes, deployment and version control as well as managing all aspects of the project. While employed in this position I broadened my skill-set by utilizing environments and platforms that were unfamiliar to me as well as furthered my depth within technical tools that I have previously been comfortable with.</p></div>').appendTo('.BCE');

  });
  bce.on('mouseleave', function() {
    $('.BCE-content').slideUp(800);
  });
  fable.on('mouseenter', function(){
    $('<div class="fable-content"> <p>Joined the Fable team as a 1st cook and later moved into a Chef de Partié position. Executed Garde Manger station, pastry station and brunch – including egg station, garnish station, occasional brunch pass. Lead the lunch service during the holidays, including but not limited to: solo lunch mise en place for up to 115 covers, placing daily orders to ensure product consistency and ensuring quality was always maintained throughout each dish. During my employment I furthered my knife skills, learned a wide variety of ways to prep different seasonal products, to make all products in house, as well as executing multiple different stations to above standard.</p></div>').appendTo('.fable');

  });
  fable.on('mouseleave', function() {
    $('.fable-content').slideUp(800);
  });
  bimini.on('mouseenter', function() {
     $('<div class="bimini-content"> <p>Hired as Line Cook then promoted to 2nd and 1st Cook over 18-month period. Temporarily handled Sous Chef responsibilities and was given charge of kitchen during absence of Head Chef. Overall, responsible for maintaining a safe work environment and ensuring kitchen is ready, operational and neatly organized on time while overseeing other kitchen staff, receiving orders, prepping a majority of the foods and sauces and leading the dinner service to make sure dishes were executed correctly. Consistently sought to raise kitchen and food quality standards and lead as an example to the rest of the team. Assisted Corporate Executive Chef in the execution of catered events. During my employment I improved my knife skills, learned multiple cooking methods and gained the ability to prep a wide variety of foods and sauces, as well as leading a kitchen team and developing an understanding of sales vs food and labor costs.</p></div>').appendTo('.bimini');
     $('.bimini-content').css('overflow', 'scroll')
  });
  bimini.on('mouseleave', function() {
    $('.bimini-content').slideUp(800);
  });


}).call(this);
