(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  ready(function () {
    var toggle = document.querySelector("[data-menu-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        toggle.textContent = menu.classList.contains("open") ? "×" : "☰";
      });
    }

    document.querySelectorAll(".site-search-form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";
        var target = "./search.html" + (query ? "?q=" + encodeURIComponent(query) : "");
        window.location.href = target;
      });
    });

    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q") || "";
    var filterRoot = document.querySelector("[data-filter-page]");

    if (filterRoot) {
      var keywordInput = filterRoot.querySelector("[data-filter-keyword]");
      var yearSelect = filterRoot.querySelector("[data-filter-year]");
      var regionSelect = filterRoot.querySelector("[data-filter-region]");
      var typeSelect = filterRoot.querySelector("[data-filter-type]");
      var cards = Array.prototype.slice.call(document.querySelectorAll(".movie-card"));
      var noResults = document.querySelector("[data-no-results]");

      if (keywordInput && initialQuery) {
        keywordInput.value = initialQuery;
      }

      function applyFilters() {
        var keyword = normalize(keywordInput && keywordInput.value);
        var year = normalize(yearSelect && yearSelect.value);
        var region = normalize(regionSelect && regionSelect.value);
        var type = normalize(typeSelect && typeSelect.value);
        var visibleCount = 0;

        cards.forEach(function (card) {
          var text = normalize([
            card.dataset.title,
            card.dataset.region,
            card.dataset.year,
            card.dataset.type,
            card.dataset.tags,
            card.textContent
          ].join(" "));

          var match = true;
          if (keyword && text.indexOf(keyword) === -1) {
            match = false;
          }
          if (year && normalize(card.dataset.year) !== year) {
            match = false;
          }
          if (region && normalize(card.dataset.region) !== region) {
            match = false;
          }
          if (type && normalize(card.dataset.type) !== type) {
            match = false;
          }

          card.style.display = match ? "" : "none";
          if (match) {
            visibleCount += 1;
          }
        });

        if (noResults) {
          noResults.classList.toggle("visible", visibleCount === 0);
        }
      }

      [keywordInput, yearSelect, regionSelect, typeSelect].forEach(function (control) {
        if (control) {
          control.addEventListener("input", applyFilters);
          control.addEventListener("change", applyFilters);
        }
      });

      applyFilters();
    }
  });
})();
