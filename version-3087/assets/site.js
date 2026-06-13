(function () {
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
            return;
        }
        document.addEventListener('DOMContentLoaded', fn);
    }

    ready(function () {
        var toggle = document.querySelector('[data-menu-toggle]');
        var panel = document.querySelector('[data-mobile-panel]');
        if (toggle && panel) {
            toggle.addEventListener('click', function () {
                panel.classList.toggle('is-open');
            });
        }

        document.querySelectorAll('img[data-image]').forEach(function (img) {
            img.addEventListener('error', function () {
                img.style.display = 'none';
            });
        });

        var hero = document.querySelector('[data-hero]');
        if (hero) {
            var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
            var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
            var current = 0;
            var show = function (index) {
                current = index;
                slides.forEach(function (slide, i) {
                    slide.classList.toggle('is-active', i === current);
                });
                dots.forEach(function (dot, i) {
                    dot.classList.toggle('is-active', i === current);
                });
            };
            dots.forEach(function (dot, index) {
                dot.addEventListener('click', function () {
                    show(index);
                });
            });
            if (slides.length > 1) {
                setInterval(function () {
                    show((current + 1) % slides.length);
                }, 5200);
            }
        }

        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get('q') || '';
        document.querySelectorAll('[data-search-form]').forEach(function (form) {
            var input = form.querySelector('input[name="q"]');
            if (input && initialQuery) {
                input.value = initialQuery;
            }
        });

        var filterInput = document.querySelector('[data-filter-input]');
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'));
        var empty = document.querySelector('[data-search-empty]');
        var applyFilter = function (value) {
            var q = (value || '').trim().toLowerCase();
            var visible = 0;
            cards.forEach(function (card) {
                var haystack = (card.getAttribute('data-search') || card.textContent || '').toLowerCase();
                var matched = !q || haystack.indexOf(q) !== -1;
                card.style.display = matched ? '' : 'none';
                if (matched) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.style.display = visible ? 'none' : 'block';
            }
        };
        if (filterInput) {
            if (initialQuery) {
                filterInput.value = initialQuery;
            }
            filterInput.addEventListener('input', function () {
                applyFilter(filterInput.value);
            });
            applyFilter(filterInput.value);
        }

        document.querySelectorAll('[data-player]').forEach(function (shell) {
            var video = shell.querySelector('video');
            var button = shell.querySelector('[data-play-button]');
            if (!video) {
                return;
            }
            var source = video.getAttribute('data-stream');
            var hls;
            var initialized = false;
            var initialize = function () {
                if (initialized || !source) {
                    return;
                }
                initialized = true;
                if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({ enableWorker: true });
                    hls.loadSource(source);
                    hls.attachMedia(video);
                } else {
                    video.src = source;
                }
            };
            initialize();
            if (button) {
                button.addEventListener('click', function () {
                    initialize();
                    var playPromise = video.play();
                    if (playPromise && playPromise.catch) {
                        playPromise.catch(function () {});
                    }
                });
            }
            video.addEventListener('play', function () {
                shell.classList.add('is-playing');
            });
            video.addEventListener('pause', function () {
                shell.classList.remove('is-playing');
            });
            video.addEventListener('ended', function () {
                shell.classList.remove('is-playing');
            });
            window.addEventListener('pagehide', function () {
                if (hls && hls.destroy) {
                    hls.destroy();
                }
            });
        });
    });
})();
