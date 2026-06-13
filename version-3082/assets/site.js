(function () {
    var heroTimer = null;

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    function initNavigation() {
        var toggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.main-nav');
        if (!toggle || !nav) {
            return;
        }
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    function initHero() {
        var hero = document.querySelector('[data-hero]');
        if (!hero) {
            return;
        }
        var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
        var prev = hero.querySelector('.hero-prev');
        var next = hero.querySelector('.hero-next');
        if (!slides.length) {
            return;
        }
        var active = Math.max(0, slides.findIndex(function (slide) {
            return slide.classList.contains('is-active');
        }));

        function show(index) {
            active = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === active);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === active);
            });
        }

        function restart() {
            window.clearInterval(heroTimer);
            heroTimer = window.setInterval(function () {
                show(active + 1);
            }, 5200);
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
                restart();
            });
        });
        if (prev) {
            prev.addEventListener('click', function () {
                show(active - 1);
                restart();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(active + 1);
                restart();
            });
        }
        restart();
    }

    function initCardFilters() {
        var panels = Array.prototype.slice.call(document.querySelectorAll('[data-filter-page]'));
        panels.forEach(function (panel) {
            var search = panel.querySelector('[data-card-search]');
            var year = panel.querySelector('[data-year-filter]');
            var cards = Array.prototype.slice.call(panel.querySelectorAll('.movie-card'));
            var empty = panel.querySelector('[data-empty-state]');

            function apply() {
                var query = search ? search.value.trim().toLowerCase() : '';
                var selectedYear = year ? year.value : '';
                var visible = 0;
                cards.forEach(function (card) {
                    var text = [
                        card.getAttribute('data-title') || '',
                        card.getAttribute('data-region') || '',
                        card.getAttribute('data-genre') || '',
                        card.getAttribute('data-tags') || '',
                        card.getAttribute('data-year') || ''
                    ].join(' ').toLowerCase();
                    var matchQuery = !query || text.indexOf(query) !== -1;
                    var matchYear = !selectedYear || card.getAttribute('data-year') === selectedYear;
                    var matched = matchQuery && matchYear;
                    card.hidden = !matched;
                    if (matched) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
            }

            if (search) {
                search.addEventListener('input', apply);
            }
            if (year) {
                year.addEventListener('change', apply);
            }
        });
    }

    function getQueryValue() {
        var params = new URLSearchParams(window.location.search);
        return (params.get('q') || '').trim();
    }

    function createTag(text) {
        var span = document.createElement('span');
        span.textContent = text;
        return span;
    }

    function initSearchPage() {
        var page = document.querySelector('[data-search-page]');
        if (!page || !window.SEARCH_INDEX) {
            return;
        }
        var form = document.querySelector('[data-search-form]');
        var input = document.querySelector('[data-search-input]');
        var results = page.querySelector('[data-search-results]');
        var template = page.querySelector('[data-result-template]');
        var title = page.querySelector('[data-search-title]');
        var copy = page.querySelector('[data-search-copy]');
        var initial = getQueryValue();
        if (input && initial) {
            input.value = initial;
        }

        function render(query) {
            if (!results || !template) {
                return;
            }
            var normalized = (query || '').trim().toLowerCase();
            if (!normalized) {
                title.textContent = '热门推荐';
                copy.textContent = '也可以直接从下方推荐内容开始浏览。';
                return;
            }
            var matched = window.SEARCH_INDEX.filter(function (item) {
                return item.searchText.indexOf(normalized) !== -1;
            }).slice(0, 80);
            results.innerHTML = '';
            matched.forEach(function (item) {
                var node = template.content.firstElementChild.cloneNode(true);
                var detailLink = node.querySelector('[data-detail-link]');
                var titleLink = node.querySelector('[data-title-link]');
                var cover = node.querySelector('[data-cover]');
                var meta = node.querySelector('[data-meta]');
                var oneLine = node.querySelector('[data-one-line]');
                var tags = node.querySelector('[data-tags]');
                detailLink.href = item.url;
                titleLink.href = item.url;
                titleLink.textContent = item.title;
                cover.src = item.cover;
                cover.alt = item.title;
                meta.innerHTML = '<span>' + item.year + '</span><span>' + item.type + '</span><span>' + item.region + '</span>';
                oneLine.textContent = item.oneLine;
                item.tags.slice(0, 3).forEach(function (tag) {
                    tags.appendChild(createTag(tag));
                });
                results.appendChild(node);
            });
            title.textContent = matched.length ? '搜索结果' : '没有找到匹配影片';
            copy.textContent = matched.length ? '以下内容与当前关键词相关。' : '可以更换片名、年份、地区或类型再次搜索。';
        }

        if (form && input) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                var query = input.value.trim();
                var url = query ? 'search.html?q=' + encodeURIComponent(query) : 'search.html';
                window.history.replaceState(null, '', url);
                render(query);
            });
            input.addEventListener('input', function () {
                render(input.value);
            });
        }
        render(input ? input.value : initial);
    }

    function initPlayer() {
        var shell = document.querySelector('[data-player-shell]');
        if (!shell) {
            return;
        }
        var video = shell.querySelector('video');
        var button = shell.querySelector('[data-play-cover]');
        if (!video) {
            return;
        }
        var sourceNode = video.querySelector('source');
        var src = sourceNode ? sourceNode.src : video.currentSrc;
        var hlsInstance = null;
        var started = false;

        function playVideo() {
            if (!src) {
                return;
            }
            if (!started) {
                started = true;
                if (button) {
                    button.classList.add('is-hidden');
                }
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = src;
                    video.play().catch(function () {});
                } else if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: false,
                        backBufferLength: 90
                    });
                    hlsInstance.loadSource(src);
                    hlsInstance.attachMedia(video);
                    hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        video.play().catch(function () {});
                    });
                } else {
                    video.src = src;
                    video.play().catch(function () {});
                }
            } else {
                video.play().catch(function () {});
            }
        }

        if (button) {
            button.addEventListener('click', playVideo);
        }
        video.addEventListener('click', function () {
            if (video.paused) {
                playVideo();
            }
        });
        window.addEventListener('pagehide', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }

    ready(function () {
        initNavigation();
        initHero();
        initCardFilters();
        initSearchPage();
        initPlayer();
    });
})();
