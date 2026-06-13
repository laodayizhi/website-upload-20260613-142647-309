(function () {
    var menuButton = document.querySelector("[data-menu-button]");
    var mobileNav = document.querySelector("[data-mobile-nav]");

    if (menuButton && mobileNav) {
        menuButton.addEventListener("click", function () {
            mobileNav.classList.toggle("is-open");
        });
    }

    var carousel = document.querySelector("[data-hero-carousel]");

    if (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-hero-dot]"));
        var current = 0;

        function showSlide(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === current);
            });
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                showSlide(index);
            });
        });

        if (slides.length > 1) {
            window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }
    }

    var filterAreas = Array.prototype.slice.call(document.querySelectorAll("[data-filter-area]"));

    filterAreas.forEach(function (area) {
        var searchInput = area.querySelector("[data-search-input]");
        var yearSelect = area.querySelector("[data-year-select]");
        var regionSelect = area.querySelector("[data-region-select]");
        var typeSelect = area.querySelector("[data-type-select]");
        var cards = Array.prototype.slice.call(area.querySelectorAll(".movie-card"));
        var emptyState = area.querySelector("[data-empty-state]");
        var params = new URLSearchParams(window.location.search);
        var query = params.get("q") || "";

        if (searchInput && query) {
            searchInput.value = query;
        }

        function normalize(value) {
            return String(value || "").trim().toLowerCase();
        }

        function applyFilters() {
            var keyword = normalize(searchInput ? searchInput.value : "");
            var year = yearSelect ? yearSelect.value : "";
            var region = regionSelect ? regionSelect.value : "";
            var type = typeSelect ? typeSelect.value : "";
            var visible = 0;

            cards.forEach(function (card) {
                var haystack = normalize([
                    card.dataset.title,
                    card.dataset.region,
                    card.dataset.year,
                    card.dataset.type,
                    card.dataset.genre,
                    card.textContent
                ].join(" "));
                var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchedYear = !year || card.dataset.year === year;
                var matchedRegion = !region || card.dataset.region === region;
                var matchedType = !type || card.dataset.type === type;
                var matched = matchedKeyword && matchedYear && matchedRegion && matchedType;

                card.style.display = matched ? "" : "none";
                if (matched) {
                    visible += 1;
                }
            });

            if (emptyState) {
                emptyState.classList.toggle("is-visible", visible === 0);
            }
        }

        [searchInput, yearSelect, regionSelect, typeSelect].forEach(function (control) {
            if (control) {
                control.addEventListener("input", applyFilters);
                control.addEventListener("change", applyFilters);
            }
        });

        applyFilters();
    });
})();

function initMoviePlayer(options) {
    var video = document.getElementById(options.videoId);
    var button = document.getElementById(options.buttonId);
    var stream = options.stream;
    var hlsInstance = null;
    var attached = false;

    if (!video || !button || !stream) {
        return;
    }

    function attachStream() {
        if (attached) {
            return;
        }

        attached = true;

        if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsInstance.loadSource(stream);
            hlsInstance.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = stream;
        } else {
            video.src = stream;
        }
    }

    function startPlayback() {
        attachStream();
        button.classList.add("is-hidden");
        var playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
                button.classList.remove("is-hidden");
            });
        }
    }

    button.addEventListener("click", startPlayback);
    video.addEventListener("click", function () {
        if (video.paused) {
            startPlayback();
        }
    });
    video.addEventListener("play", function () {
        button.classList.add("is-hidden");
    });
    video.addEventListener("pause", function () {
        if (video.currentTime === 0 || video.ended) {
            button.classList.remove("is-hidden");
        }
    });
    window.addEventListener("beforeunload", function () {
        if (hlsInstance) {
            hlsInstance.destroy();
        }
    });
}
