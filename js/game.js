var game = {
  colorblind:
    (localStorage.colorblind && JSON.parse(localStorage.colorblind)) || "false",
  language: window.location.hash.substring(1) || "en",
  difficulty: "easy",
  level: parseInt(localStorage.level, 10) || 0,
  answers: (localStorage.answers && JSON.parse(localStorage.answers)) || {},
  solved: (localStorage.solved && JSON.parse(localStorage.solved)) || [],
  changed: false,
  clickedCode: null,

  start: function () {
    var inputFormat = "tailwind-utilities-v1";
    if (localStorage.inputFormat !== inputFormat) {
      // CSS declaration answers cannot be safely interpreted as Tailwind utilities.
      game.answers = {};
      game.solved = [];
      localStorage.setItem("inputFormat", inputFormat);
    }

    game.language = translator.getInitialLanguage(messages.languageActive);

    game.translate();
    $("#level-counter .total").text(levels.length);
    $("#editor").show();
    $("#share").hide();
    $("#language").val(game.language);
    $('input[value="' + game.colorblind + '"]', "#colorblind").prop(
      "checked",
      true,
    );

    this.setHandlers();
    this.loadMenu();
    game.loadLevel(levels[game.level]);
  },

  setHandlers: function () {
    $("#learn").on("click", function () {
      window.location.assign("learn/direction.html");
    });

    $("#next").on("click", function () {
      $("#code").focus();

      if ($(this).hasClass("disabled")) {
        if (!$(".frog").hasClass("animated")) {
          game.tryagain();
        }

        return;
      }

      $(this).removeClass("animated animation");
      $(".frog").addClass("animated bounceOutUp");
      $(".arrow, #next").addClass("disabled");

      setTimeout(function () {
        if (game.level >= levels.length - 1) {
          game.win();
        } else {
          game.next();
        }
      }, 2000);
    });

    $("#code")
      .on("keydown", function (e) {
        if (e.key === "Enter" || e.which === 13) {
          e.preventDefault();
          game.check().then(function () {
            $("#next").click();
          });
          return false;
        }
      })
      .on("input", function () {
        // Keep pasted content consistent with the single-line class-list editor.
        var value = $(this).val();
        var normalizedValue = value.replace(/[\r\n]+/g, " ");

        if (value !== normalizedValue) {
          $(this).val(normalizedValue);
        }
      })
      .on("input", game.debounce(game.check, 500))
      .on("input", function () {
        game.changed = true;
        $("#next").removeClass("animated animation").addClass("disabled");
      });

    $("#editor").on(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      },
    );

    $("#labelReset").on("click", function () {
      var warningReset =
        messages.warningReset[game.language] || messages.warningReset.en;
      var r = confirm(warningReset);

      if (r) {
        game.level = 0;
        game.answers = {};
        game.solved = [];
        game.loadLevel(levels[0]);

        $(".level-marker").removeClass("solved");
      }
    });

    $("#labelSettings").on("click", function () {
      $("#levelsWrapper").hide();
      $("#settings .tooltip").toggle();
      $("#instructions .tooltip").remove();
    });

    $("#language").on("change", function () {
      window.location.hash = $(this).val();
    });

    $("#difficulty").on("change", function () {
      game.difficulty = $("input:checked", "#difficulty").val();

      // setting height will prevent a slight jump when the animation starts
      var $instructions = $("#instructions");
      var height = $instructions.height();
      $instructions.css("height", height);

      var $markers = $(".level-marker");

      if (game.difficulty == "hard" || game.difficulty == "medium") {
        $instructions.slideUp();

        $markers.each(function () {
          var $marker = $(this);
          if ($marker[0].hasAttribute("title")) {
            $marker.attr("data-title", $marker.attr("title"));
            $marker.removeAttr("title");
          }
        });
      } else {
        $instructions.css("height", "").slideDown();

        $markers.each(function () {
          var $marker = $(this);
          if ($marker[0].hasAttribute("data-title")) {
            $marker.attr("title", $marker.attr("data-title"));
            $marker.removeAttr("data-title");
          }
        });
      }
    });

    $("#colorblind").on("change", function () {
      game.colorblind = $("input:checked", "#colorblind").val();

      if (game.colorblind == "true") {
        $(".lilypad, .frog").addClass("cb-friendly");
      } else {
        $(".lilypad, .frog").removeClass("cb-friendly");
      }
    });

    $("body").on("click", function () {
      $(".tooltip").hide();
      clickedCode = null;
    });

    $(".tooltip, .toggle, #level-indicator").on("click", function (e) {
      e.stopPropagation();
    });

    $(window)
      .on("beforeunload", function () {
        game.saveAnswer();
        localStorage.setItem("level", game.level);
        localStorage.setItem("answers", JSON.stringify(game.answers));
        localStorage.setItem("solved", JSON.stringify(game.solved));
        localStorage.setItem("colorblind", JSON.stringify(game.colorblind));
      })
      .on("hashchange", function () {
        game.language = translator.getLanguageFromHash(messages.languageActive);
        game.translate();

        $("#tweet iframe").remove();
        var html =
          '<a href="https://twitter.com/share" class="twitter-share-button"{count} data-url="https://flexwindfroggy.com" data-via="thomashpark">Tweet</a> ' +
          '<a href="https://twitter.com/thomashpark" class="twitter-follow-button" data-show-count="false">Follow @thomashpark</a>';
        $("#tweet").html(html);

        if (typeof twttr !== "undefined") {
          twttr.widgets.load();
        }

        if (game.language === "en") {
          history.replaceState({}, document.title, "./");
        }
      });
  },

  prev: function () {
    this.level--;

    var levelData = levels[this.level];
    this.loadLevel(levelData);
  },

  next: function () {
    if (this.difficulty === "hard") {
      this.level = Math.floor(Math.random() * levels.length);
    } else {
      this.level++;
    }

    var levelData = levels[this.level];
    this.loadLevel(levelData);
  },

  loadMenu: function () {
    levels.forEach(function (level, i) {
      var levelMarker = $("<span/>")
        .addClass("level-marker")
        .attr({ "data-level": i, title: level.name })
        .text(i + 1);

      if ($.inArray(level.name, game.solved) !== -1) {
        levelMarker.addClass("solved");
      }

      levelMarker.appendTo("#levels");
    });

    $(".level-marker").on("click", function () {
      game.saveAnswer();

      var level = $(this).attr("data-level");
      game.level = parseInt(level, 10);
      game.loadLevel(levels[level]);
    });

    $("#level-indicator").on("click", function () {
      $("#settings .tooltip").hide();
      $("#levelsWrapper").toggle();
      $("#instructions .tooltip").remove();
    });

    $(".arrow.left").on("click", function () {
      if ($(this).hasClass("disabled")) {
        return;
      }

      game.saveAnswer();
      game.prev();
    });

    $(".arrow.right").on("click", function () {
      if ($(this).hasClass("disabled")) {
        return;
      }

      game.saveAnswer();
      game.next();
    });
  },

  loadLevel: function (level) {
    $("#completion-card").prop("hidden", true);
    $("#editor").show();
    $("#share").hide();
    $("#background, #pond").removeClass("wrap").attr("style", "").empty();
    $("#levelsWrapper").hide();
    $(".level-marker")
      .removeClass("current")
      .eq(this.level)
      .addClass("current");
    $("#level-counter .current").text(this.level + 1);
    $("#before").text(level.before);
    $("#after").text(level.after);
    $("#next").removeClass("animated animation").addClass("disabled");

    var instructions =
      level.instructions[game.language] || level.instructions.en;
    $("#instructions").html(instructions);

    $(".arrow.disabled").removeClass("disabled");

    if (this.level === 0) {
      $(".arrow.left").addClass("disabled");
    }

    if (this.level === levels.length - 1) {
      $(".arrow.right").addClass("disabled");
    }

    var answer = game.answers[level.name];
    $("#code").val(answer).focus();

    this.loadDocs();

    var lines = Object.keys(level.style).length;
    $("#code").height(20).data("lines", lines);

    var string = level.board;
    var markup = "";
    var colors = {
      g: "green",
      r: "red",
      y: "yellow",
    };

    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      var color = colors[c];

      var lilypad = $("<div/>")
        .addClass(
          "lilypad " +
            color +
            (this.colorblind == "true" ? " cb-friendly" : ""),
        )
        .data("color", color);
      var frog = $("<div/>")
        .addClass(
          "frog " + color + (this.colorblind == "true" ? " cb-friendly" : ""),
        )
        .data("color", color);

      $("<div/>").addClass("bg").css(game.transform()).appendTo(lilypad);
      $("<div/>").addClass("bg animated pulse infinite").appendTo(frog);

      $("#background").append(lilypad);
      $("#pond").append(frog);
    }

    var classes = level.classes;

    if (classes) {
      for (var rule in classes) {
        $(rule).addClass(classes[rule]);
      }
    }

    var selector = level.selector || "";
    $("#background " + selector).css(level.style);

    game.changed = false;
    game.applyStyles();
    game.check();
  },

  loadDocs: function () {
    $("#instructions code").each(function () {
      var code = $(this);
      var text = code.text();

      if (text in docs) {
        code.addClass("help");
        code.on("click", function (e) {
          e.stopPropagation();

          // If click same code when tooltip already displayed, just remove current tooltip.
          if (
            $("#instructions .tooltip").length !== 0 &&
            clickedCode === code
          ) {
            $("#instructions .tooltip").remove();
            return;
          }

          $("#levelsWrapper").hide();
          $("#settings .tooltip").hide();
          $("#instructions .tooltip").remove();
          var html = docs[text][game.language] || docs[text].en;
          var tooltipX = code.offset().left;
          var tooltipY = code.offset().top + code.height() + 13;
          $('<div class="tooltip"></div>')
            .html(html)
            .css({
              top: tooltipY,
              left: tooltipX,
            })
            .appendTo($("#instructions"));

          $("#instructions .tooltip code").on("click", function (event) {
            var utility = event.target.textContent.split(" ")[0];
            game.writeUtility(utility);

            game.check();
          });
          clickedCode = code;
        });
      }
    });
  },

  applyStyles: function () {
    var level = levels[game.level];
    var selector = level.selector || "";
    var utilities = $("#code").val().trim().split(/\s+/).filter(Boolean);
    var styles = {};

    utilities.forEach(function (utility) {
      if (tailwindUtilities[utility]) {
        Object.assign(styles, tailwindUtilities[utility]);
      }
    });

    $("#pond " + selector)
      .attr("style", "")
      .css(styles);
    game.saveAnswer();
  },

  check: async function () {
    if (!document.startViewTransition) {
      game.applyStyles();
      game.compare();
      return;
    }

    const transition = document.startViewTransition(() => game.applyStyles());

    try {
      await transition.finished;
    } finally {
      game.compare();
    }
  },

  compare: function () {
    var level = levels[game.level];
    var lilypads = {};
    var frogs = {};
    var correct = true;

    $(".frog").each(function () {
      var position = $(this).position();
      position.top = Math.floor(position.top);
      position.left = Math.floor(position.left);

      var key = JSON.stringify(position);
      var val = $(this).data("color");
      frogs[key] = val;
    });

    $(".lilypad").each(function () {
      var position = $(this).position();
      position.top = Math.floor(position.top);
      position.left = Math.floor(position.left);

      var key = JSON.stringify(position);
      var val = $(this).data("color");

      if (!(key in frogs) || frogs[key] !== val) {
        correct = false;
      }
    });

    if (correct) {
      if ($.inArray(level.name, game.solved) === -1) {
        game.solved.push(level.name);
      }

      $("[data-level=" + game.level + "]").addClass("solved");
      $("#next").removeClass("disabled").addClass("animated animation");
    } else {
      game.changed = true;
      $("#next").removeClass("animated animation").addClass("disabled");
    }
  },

  saveAnswer: function () {
    var level = levels[this.level];
    game.answers[level.name] = $("#code").val();
  },

  tryagain: function () {
    $("#editor").addClass("animated shake");
  },

  win: function () {
    var solution = $("#code").val();

    this.loadLevel(levelWin);

    $("#editor").hide();
    $("#completion-card").prop("hidden", false);
    $("#code").val(solution);
    $("#share").show();
    $(".frog .bg").removeClass("pulse").addClass("bounce");
  },

  transform: function () {
    var scale = 1 + (Math.random() / 5 - 0.2);
    var rotate = 360 * Math.random();

    return { transform: "scale(" + scale + ") rotate(" + rotate + "deg)" };
  },

  translate: function () {
    translator.translate(messages, game.language);

    var level = $("#editor").is(":visible") ? levels[game.level] : levelWin;
    var instructions =
      level.instructions[game.language] || level.instructions.en;
    $("#instructions").html(instructions);
    game.loadDocs();

  },

  debounce: function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  writeUtility: function (utility) {
    if (!tailwindUtilities[utility]) return;

    var utilityProperties = Object.keys(tailwindUtilities[utility]);
    var tokens = $("#code").val().trim().split(/\s+/).filter(Boolean);
    var filteredTokens = tokens.filter(function (token) {
      if (!tailwindUtilities[token]) return true;

      return !Object.keys(tailwindUtilities[token]).some(function (property) {
        return utilityProperties.includes(property);
      });
    });

    filteredTokens.push(utility);
    $("#code").val(filteredTokens.join(" "));
    $("#code").focus();
  },
};

$(document).ready(function () {
  game.start();
});
