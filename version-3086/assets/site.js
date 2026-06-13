(function () {
    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    ready(function () {
        var menuToggle = document.querySelector('[data-menu-toggle]');
        var mobilePanel = document.querySelector('[data-mobile-panel]');

        if (menuToggle && mobilePanel) {
            menuToggle.addEventListener('click', function () {
                mobilePanel.classList.toggle('is-open');
            });
        }

        document.querySelectorAll('[data-header-search]').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var input = form.querySelector('input[name="q"]');
                if (!input || !input.value.trim()) {
                    event.preventDefault();
                }
            });
        });

        document.querySelectorAll('[data-hero]').forEach(function (hero) {
            var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
            var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
            var prev = hero.querySelector('[data-hero-prev]');
            var next = hero.querySelector('[data-hero-next]');
            var index = 0;
            var timer = null;

            function show(nextIndex) {
                if (!slides.length) {
                    return;
                }
                index = (nextIndex + slides.length) % slides.length;
                slides.forEach(function (slide, slideIndex) {
                    slide.classList.toggle('is-active', slideIndex === index);
                });
                dots.forEach(function (dot, dotIndex) {
                    dot.classList.toggle('is-active', dotIndex === index);
                });
            }

            function start() {
                stop();
                timer = setInterval(function () {
                    show(index + 1);
                }, 5200);
            }

            function stop() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
            }

            if (prev) {
                prev.addEventListener('click', function () {
                    show(index - 1);
                    start();
                });
            }

            if (next) {
                next.addEventListener('click', function () {
                    show(index + 1);
                    start();
                });
            }

            dots.forEach(function (dot, dotIndex) {
                dot.addEventListener('click', function () {
                    show(dotIndex);
                    start();
                });
            });

            hero.addEventListener('mouseenter', stop);
            hero.addEventListener('mouseleave', start);
            show(0);
            start();
        });

        document.querySelectorAll('[data-filter-panel]').forEach(function (panel) {
            var input = panel.querySelector('[data-search-input]');
            var year = panel.querySelector('[data-year-filter]');
            var region = panel.querySelector('[data-region-filter]');
            var scope = panel.parentElement ? panel.parentElement.querySelector('[data-search-scope]') : null;
            var count = panel.querySelector('[data-filter-count]');
            var cards = scope ? Array.prototype.slice.call(scope.querySelectorAll('.movie-card')) : [];
            var params = new URLSearchParams(window.location.search);
            var query = params.get('q') || '';

            if (input && query) {
                input.value = query;
            }

            function applyFilter() {
                var keyword = input ? input.value.trim().toLowerCase() : '';
                var selectedYear = year ? year.value : '';
                var selectedRegion = region ? region.value : '';
                var visible = 0;

                cards.forEach(function (card) {
                    var searchText = (card.getAttribute('data-search') || '').toLowerCase();
                    var cardYear = card.getAttribute('data-year') || '';
                    var cardRegion = card.getAttribute('data-region') || '';
                    var matched = true;

                    if (keyword && searchText.indexOf(keyword) === -1) {
                        matched = false;
                    }
                    if (selectedYear && cardYear !== selectedYear) {
                        matched = false;
                    }
                    if (selectedRegion && cardRegion !== selectedRegion) {
                        matched = false;
                    }

                    card.classList.toggle('is-hidden', !matched);
                    if (matched) {
                        visible += 1;
                    }
                });

                if (count) {
                    count.textContent = '当前显示 ' + visible + ' 部影片';
                }
            }

            if (input) {
                input.addEventListener('input', applyFilter);
            }
            if (year) {
                year.addEventListener('change', applyFilter);
            }
            if (region) {
                region.addEventListener('change', applyFilter);
            }

            applyFilter();
        });

        document.querySelectorAll('[data-player]').forEach(function (player) {
            var video = player.querySelector('video');
            var overlay = player.querySelector('[data-player-overlay]');
            var buttons = player.querySelectorAll('[data-play-button]');
            var source = player.getAttribute('data-video');
            var started = false;
            var hlsInstance = null;

            function startVideo() {
                if (!video || !source) {
                    return;
                }

                if (overlay) {
                    overlay.classList.add('is-hidden');
                }

                if (!started) {
                    if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = source;
                    } else if (window.Hls && window.Hls.isSupported()) {
                        hlsInstance = new window.Hls();
                        hlsInstance.loadSource(source);
                        hlsInstance.attachMedia(video);
                    } else {
                        video.src = source;
                    }
                    started = true;
                }

                var promise = video.play();
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {
                        video.controls = true;
                    });
                }
            }

            buttons.forEach(function (button) {
                button.addEventListener('click', startVideo);
            });

            if (overlay) {
                overlay.addEventListener('click', startVideo);
            }

            if (video) {
                video.addEventListener('click', function () {
                    if (!started) {
                        startVideo();
                    }
                });
            }

            window.addEventListener('beforeunload', function () {
                if (hlsInstance) {
                    hlsInstance.destroy();
                }
            });
        });
    });
})();
