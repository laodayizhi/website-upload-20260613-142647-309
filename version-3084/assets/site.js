
(function () {
    'use strict';

    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function setupMobileMenu() {
        var toggle = document.querySelector('[data-menu-toggle]');
        var menu = document.querySelector('[data-mobile-menu]');
        if (!toggle || !menu) {
            return;
        }
        toggle.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    }

    function setupHeroSlider() {
        var slider = document.querySelector('[data-hero-slider]');
        if (!slider) {
            return;
        }

        var slides = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-dot]'));
        var prev = slider.querySelector('[data-hero-prev]');
        var next = slider.querySelector('[data-hero-next]');
        var activeIndex = 0;
        var timer = null;

        function show(index) {
            if (!slides.length) {
                return;
            }
            activeIndex = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === activeIndex);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === activeIndex);
            });
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                show(activeIndex + 1);
            }, 5000);
        }

        if (prev) {
            prev.addEventListener('click', function () {
                show(activeIndex - 1);
                restart();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(activeIndex + 1);
                restart();
            });
        }
        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                show(dotIndex);
                restart();
            });
        });
        show(0);
        restart();
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function setupFiltering() {
        var input = document.querySelector('[data-filter-input]');
        var typeSelect = document.querySelector('[data-filter-type]');
        var regionSelect = document.querySelector('[data-filter-region]');
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
        var empty = document.querySelector('[data-empty-state]');

        if (!input && !typeSelect && !regionSelect) {
            return;
        }

        var params = new URLSearchParams(window.location.search);
        var query = params.get('q');
        if (query && input) {
            input.value = query;
        }

        function applyFilter() {
            var text = normalize(input ? input.value : '');
            var type = normalize(typeSelect ? typeSelect.value : '');
            var region = normalize(regionSelect ? regionSelect.value : '');
            var visible = 0;

            cards.forEach(function (card) {
                var haystack = normalize([
                    card.dataset.title,
                    card.dataset.region,
                    card.dataset.type,
                    card.dataset.year,
                    card.dataset.genre,
                    card.dataset.tags,
                    card.textContent
                ].join(' '));
                var typeValue = normalize(card.dataset.type + ' ' + card.dataset.genre + ' ' + card.dataset.tags + ' ' + card.dataset.title);
                var regionValue = normalize(card.dataset.region + ' ' + card.dataset.title + ' ' + card.dataset.tags);
                var matched = (!text || haystack.indexOf(text) !== -1) &&
                    (!type || typeValue.indexOf(type) !== -1) &&
                    (!region || regionValue.indexOf(region) !== -1);

                card.hidden = !matched;
                if (matched) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.hidden = visible !== 0;
            }
        }

        [input, typeSelect, regionSelect].forEach(function (control) {
            if (control) {
                control.addEventListener('input', applyFilter);
                control.addEventListener('change', applyFilter);
            }
        });
        applyFilter();
    }

    function setupPlayers() {
        document.addEventListener('click', function (event) {
            var button = event.target.closest('[data-play-video]');
            if (!button) {
                return;
            }

            var player = button.closest('[data-player]');
            if (!player) {
                return;
            }

            var video = player.querySelector('video[data-video-source]');
            if (!video) {
                return;
            }

            var source = video.dataset.videoSource;
            if (!source) {
                return;
            }

            button.disabled = true;
            player.classList.add('is-playing');
            video.controls = true;

            if (window.Hls && window.Hls.isSupported()) {
                if (video._hlsInstance) {
                    video._hlsInstance.destroy();
                }
                var hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                video._hlsInstance = hls;
                hls.loadSource(source);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    video.play().catch(function () {
                        player.classList.remove('is-playing');
                        button.disabled = false;
                    });
                });
                hls.on(window.Hls.Events.ERROR, function (eventName, data) {
                    if (data && data.fatal) {
                        video.src = source;
                        video.play().catch(function () {
                            player.classList.remove('is-playing');
                            button.disabled = false;
                        });
                    }
                });
            } else {
                video.src = source;
                video.play().catch(function () {
                    player.classList.remove('is-playing');
                    button.disabled = false;
                });
            }
        });
    }

    ready(function () {
        setupMobileMenu();
        setupHeroSlider();
        setupFiltering();
        setupPlayers();
    });
}());
