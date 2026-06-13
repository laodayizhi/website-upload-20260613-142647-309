(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    ready(function () {
        var toggle = document.querySelector(".menu-toggle");
        var nav = document.querySelector(".site-nav");

        if (toggle && nav) {
            toggle.addEventListener("click", function () {
                var open = nav.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            });
        }

        var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
        var previous = document.querySelector(".hero-prev");
        var next = document.querySelector(".hero-next");
        var index = 0;
        var timer = null;

        function showSlide(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        function startTimer() {
            if (timer || slides.length < 2) {
                return;
            }
            timer = setInterval(function () {
                showSlide(index + 1);
            }, 5000);
        }

        if (previous) {
            previous.addEventListener("click", function () {
                showSlide(index - 1);
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                showSlide(index + 1);
            });
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                showSlide(Number(dot.getAttribute("data-slide")) || 0);
            });
        });

        startTimer();

        var params = new URLSearchParams(window.location.search);
        var q = params.get("q");
        var searchInput = document.querySelector(".search-input");
        if (q && searchInput) {
            searchInput.value = q;
        }

        var filterPanels = Array.prototype.slice.call(document.querySelectorAll(".filter-panel"));

        function normalize(value) {
            return String(value || "").toLowerCase().trim();
        }

        function runFilter(panel) {
            var scope = panel.parentElement || document;
            var cards = Array.prototype.slice.call(scope.querySelectorAll(".movie-card"));
            var input = panel.querySelector(".search-input");
            var selects = Array.prototype.slice.call(panel.querySelectorAll(".filter-select"));
            var empty = panel.querySelector(".empty-state");
            var keyword = normalize(input ? input.value : "");
            var activeFilters = {};
            var visible = 0;

            selects.forEach(function (select) {
                activeFilters[select.getAttribute("data-filter")] = normalize(select.value);
            });

            cards.forEach(function (card) {
                var haystack = normalize([
                    card.getAttribute("data-title"),
                    card.getAttribute("data-year"),
                    card.getAttribute("data-type"),
                    card.getAttribute("data-region"),
                    card.getAttribute("data-genre"),
                    card.getAttribute("data-category"),
                    card.getAttribute("data-tags")
                ].join(" "));
                var matchKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchType = !activeFilters.type || normalize(card.getAttribute("data-type")).indexOf(activeFilters.type) !== -1;
                var matchYear = !activeFilters.year || normalize(card.getAttribute("data-year")).indexOf(activeFilters.year) !== -1;
                var matchCategory = !activeFilters.category || normalize(card.getAttribute("data-category")) === activeFilters.category;
                var match = matchKeyword && matchType && matchYear && matchCategory;

                card.style.display = match ? "" : "none";
                if (match) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.hidden = visible !== 0;
            }
        }

        filterPanels.forEach(function (panel) {
            var input = panel.querySelector(".search-input");
            var selects = Array.prototype.slice.call(panel.querySelectorAll(".filter-select"));

            if (input) {
                input.addEventListener("input", function () {
                    runFilter(panel);
                });
            }

            selects.forEach(function (select) {
                select.addEventListener("change", function () {
                    runFilter(panel);
                });
            });

            runFilter(panel);
        });
    });
})();
