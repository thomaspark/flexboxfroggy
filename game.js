var game = {
  level: parseInt(localStorage.level, 10) || 0,

  start: function() {
    $('#level-counter .total').text(levels.length);

    $('#submit').on('click', function() {
      var level = levels[game.level];
      var code = $('#code').val();
      var selector = level.selector || '';
      $('#pond ' +  selector).attr('style', code);
      $('#code').focus();
      game.check(level);
    });

    $('#code').on('keydown', function(e) {
      if (e.keyCode === 13) {
        var max = $(this).data('lines');
        var code = $(this).val();
        var trim = code.trim();
        var codeLength = code.split('\n').length;
        var trimLength = trim.split('\n').length;

        if (codeLength >= max) {

          if (codeLength === trimLength) {
            e.preventDefault();
            $('#submit').click();
          } else {
            $('#code').focus().val('').val(trim);
          }
        }
      }
    });

    $('#editor').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass();
    });

    $('.arrow').on('click', function() {
      $('#code').focus();
    });

    $('.arrow.left').on('click', function() {
      if (game.level >= 1) {
        game.level--;
      } else {
        game.level = 0;
      }

      game.loadLevel(game.level);
    });

    $('.arrow.right').on('click', function() {
      if (game.level < (levels.length - 1)) {
        game.level++;
      } else {
        game.level = levels.length - 1;
      }

      game.loadLevel(game.level);
    });

    this.loadLevel(this.level);
  },

  loadLevel: function(level) {
    level = levels[level] || levels[this.level];

    localStorage.setItem('level', this.level);

    $('#background, #pond').removeClass('wrap').attr('style', '').empty();
    $('#code').val('');

    $('#level-counter .current').text(this.level + 1);
    $('#instructions').html(level.instructions);
    $('#before').text(level.before);
    $('#after').text(level.after);

    $('.arrow.disabled').removeClass('disabled');

    if (this.level === 0) {
      $('.arrow.left').addClass('disabled');
    }

    if (this.level === levels.length - 1) {
      $('.arrow.right').addClass('disabled');
    }

    this.loadDocs();

    var lines = Object.keys(level.style).length;
    $('#code').height(20 * lines).data("lines", lines);

    var string = level.board;
    var markup = '';
    var colors = {
      'g': 'green',
      'r': 'red',
      'y': 'yellow'
    };

    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      var color = colors[c];

      var lilypad = $('<div/>').addClass('lilypad ' + color).data('color', color);
      var frog = $('<div/>').addClass('frog ' + color).data('color', color);

      $('<div/>').addClass('bg').css(game.transform()).appendTo(lilypad);
      $('<div/>').addClass('bg animated pulse infinite').appendTo(frog);

      $('#background').append(lilypad);
      $('#pond').append(frog);
    }

    var classes = level.classes;

    if (classes) {
      for (var rule in classes) {
        $(rule).addClass(classes[rule]);
      }
    }

    var selector = level.selector || '';
    $('#background ' + selector).css(level.style);
  },

  loadDocs: function() {
    $('#instructions code').each(function() {
      var code = $(this);
      var text = code.text();

      if (docs.hasOwnProperty(text)) {
        code.addClass('help');

        code.on('mouseenter', function(e) {

          if ($('.tooltip').length === 0) {
            var tooltip = $('<div class="tooltip"></div>').html(docs[text]);
            var tooltipX = code.offset().left;
            var tooltipY = code.offset().top + code.height() + 13;

            tooltip.css({top: tooltipY, left: tooltipX}).appendTo($('body'));
          }
        }).on('mouseleave', function() {
          $('.tooltip').remove();
        });
      }
    });
  },

  check: function(level) {
    var lilypads = {};
    var frogs = {};
    var correct = true;

    $('.frog').each(function() {
      var key = JSON.stringify($(this).position());
      var val = $(this).data('color');
      frogs[key] = val;
    });

    $('.lilypad').each(function() {
      var key = JSON.stringify($(this).position());
      var val = $(this).data('color');

      if (!(key in frogs) || frogs[key] !== val) {
        correct = false;
      }
    });

    if (correct) {
      ga('send', {
        hitType: 'event',
        eventCategory: level.name,
        eventAction: 'correct',
        eventLabel: $('#code').val()
      });

      if (game.level >= levels.length - 1) {
        game.win();
      } else { 
        game.level++;

          $('.frog').addClass('animated bounceOutUp');

        setTimeout(function() {
          game.loadLevel();
        }, 2500);
      }
    } else {
      ga('send', {
        hitType: 'event',
        eventCategory: level.name,
        eventAction: 'incorrect',
        eventLabel: $('#code').val()
      });

      this.tryagain();
    }
  },

  tryagain: function() {
    $('#editor').addClass('animated shake');
  },

  win: function() {
    $('#instructions').text('You win! Thanks to your mastery of flexbox, you were able to bring all of the frogs to safety.');
  },

  transform: function() {
    var scale = 1 + ((Math.random() / 5) - 0.2);
    var rotate = 360 * Math.random();

    return {'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'};
  }
};

$(document).ready(function() {
  game.start();
});
