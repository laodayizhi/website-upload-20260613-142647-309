(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function createCard(movie) {
    var article = document.createElement("article");
    article.className = "movie-card card-hover";
    article.innerHTML = [
      '<a class="poster-link" href="./' + movie.file + '" aria-label="' + movie.title.replace(/"/g, '&quot;') + '">',
      '<img src="' + movie.cover + '" alt="' + movie.title.replace(/"/g, '&quot;') + '" loading="lazy">',
      '<span class="poster-shade"></span>',
      '<span class="type-badge">' + movie.type + '</span>',
      '<span class="play-chip">播放</span>',
      '</a>',
      '<div class="movie-card-body">',
      '<div class="movie-meta-line"><span>' + movie.region + '</span><span>' + movie.year + '</span></div>',
      '<h2><a href="./' + movie.file + '">' + movie.title + '</a></h2>',
      '<p>' + movie.oneLine + '</p>',
      '<div class="card-tags"><span>' + movie.category + '</span><span>' + movie.genre + '</span></div>',
      '</div>'
    ].join("");
    return article;
  }

  ready(function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
      });
    }

    document.querySelectorAll("[data-search-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector('input[name="q"]');
        if (input && input.value.trim().length === 0) {
          event.preventDefault();
          input.focus();
        }
      });
    });

    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    if (slides.length > 1) {
      var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dots button"));
      var current = 0;
      var timer;

      function showSlide(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle("active", slideIndex === current);
        });
        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle("active", dotIndex === current);
        });
      }

      function restart() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
          showSlide(current + 1);
        }, 5000);
      }

      var prev = document.querySelector("[data-hero-prev]");
      var next = document.querySelector("[data-hero-next]");
      if (prev) {
        prev.addEventListener("click", function () {
          showSlide(current - 1);
          restart();
        });
      }
      if (next) {
        next.addEventListener("click", function () {
          showSlide(current + 1);
          restart();
        });
      }
      dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
          showSlide(index);
          restart();
        });
      });
      restart();
    }

    var filterInput = document.querySelector("[data-page-filter]");
    var empty = document.querySelector("[data-empty]");
    if (filterInput) {
      filterInput.addEventListener("input", function () {
        var query = normalize(filterInput.value);
        var visible = 0;
        document.querySelectorAll(".movie-card").forEach(function (card) {
          var text = normalize([
            card.getAttribute("data-title"),
            card.getAttribute("data-region"),
            card.getAttribute("data-year"),
            card.getAttribute("data-genre"),
            card.getAttribute("data-tags")
          ].join(" "));
          var matched = query.length === 0 || text.indexOf(query) !== -1;
          card.style.display = matched ? "" : "none";
          if (matched) {
            visible += 1;
          }
        });
        if (empty) {
          empty.style.display = visible === 0 ? "block" : "none";
        }
      });
    }

    var searchGrid = document.querySelector("[data-search-results]");
    if (searchGrid && typeof moviesIndex !== "undefined") {
      var params = new URLSearchParams(window.location.search);
      var query = normalize(params.get("q"));
      var searchInput = document.querySelector("[data-search-input]");
      var searchTitle = document.querySelector("[data-search-title]");
      if (searchInput) {
        searchInput.value = params.get("q") || "";
      }
      var results = moviesIndex.filter(function (movie) {
        if (!query) {
          return true;
        }
        return normalize([
          movie.title,
          movie.region,
          movie.year,
          movie.genre,
          movie.tags,
          movie.oneLine,
          movie.category
        ].join(" ")).indexOf(query) !== -1;
      }).slice(0, 240);
      if (searchTitle) {
        searchTitle.textContent = query ? "搜索结果" : "影片检索";
      }
      searchGrid.innerHTML = "";
      results.forEach(function (movie) {
        searchGrid.appendChild(createCard(movie));
      });
      var searchEmpty = document.querySelector("[data-search-empty]");
      if (searchEmpty) {
        searchEmpty.style.display = results.length === 0 ? "block" : "none";
      }
    }

    var video = document.getElementById("movieVideo");
    if (video && typeof playerSource !== "undefined") {
      var overlay = document.getElementById("videoOverlay");
      var button = document.getElementById("playButton");
      var attached = false;
      var hlsInstance = null;

      function attach(callback) {
        if (attached) {
          callback();
          return;
        }
        attached = true;
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = playerSource;
          callback();
        } else if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new Hls();
          hlsInstance.loadSource(playerSource);
          hlsInstance.attachMedia(video);
          hlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
            callback();
          });
        } else {
          video.src = playerSource;
          callback();
        }
      }

      function play() {
        if (overlay) {
          overlay.classList.add("is-hidden");
        }
        attach(function () {
          var promise = video.play();
          if (promise && promise.catch) {
            promise.catch(function () {});
          }
        });
      }

      if (overlay) {
        overlay.addEventListener("click", play);
      }
      if (button) {
        button.addEventListener("click", function (event) {
          event.stopPropagation();
          play();
        });
      }
      video.addEventListener("click", function () {
        if (video.paused) {
          play();
        }
      });
      window.addEventListener("beforeunload", function () {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
      });
    }
  });
})();
