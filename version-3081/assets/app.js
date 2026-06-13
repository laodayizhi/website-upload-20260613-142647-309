(function () {
    var menuButton = document.querySelector('[data-menu-button]');
    var mobileNav = document.querySelector('[data-mobile-nav]');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('is-open');
        });
    }

    var searchForms = document.querySelectorAll('[data-site-search]');
    searchForms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var input = form.querySelector('input[name="q"]');
            var query = input ? input.value.trim() : '';
            if (query) {
                window.location.href = 'search.html?q=' + encodeURIComponent(query);
            } else {
                window.location.href = 'search.html';
            }
        });
    });

    var hero = document.querySelector('[data-hero]');
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var thumbs = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-thumb]'));
        var current = 0;
        var timer = null;

        function showSlide(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            thumbs.forEach(function (thumb, thumbIndex) {
                thumb.classList.toggle('is-active', thumbIndex === current);
            });
        }

        function startHero() {
            stopHero();
            timer = window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }

        function stopHero() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        thumbs.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                var index = parseInt(thumb.getAttribute('data-hero-thumb'), 10);
                showSlide(index);
                startHero();
            });
        });

        hero.addEventListener('mouseenter', stopHero);
        hero.addEventListener('mouseleave', startHero);
        startHero();
    }

    function getQuery() {
        var params = new URLSearchParams(window.location.search);
        return (params.get('q') || '').trim();
    }

    function createResultCard(movie) {
        var article = document.createElement('article');
        article.className = 'movie-card grid';

        var poster = document.createElement('a');
        poster.className = 'poster-media';
        poster.href = movie.url;
        poster.setAttribute('aria-label', '观看' + movie.title);

        var image = document.createElement('img');
        image.src = movie.cover;
        image.alt = movie.title;
        image.loading = 'lazy';
        image.onerror = function () {
            poster.classList.add('poster-missing');
            image.remove();
        };

        var gradient = document.createElement('span');
        gradient.className = 'poster-gradient';

        var year = document.createElement('span');
        year.className = 'poster-year';
        year.textContent = movie.year;

        var play = document.createElement('span');
        play.className = 'poster-play';
        play.textContent = '▶';

        poster.appendChild(image);
        poster.appendChild(gradient);
        poster.appendChild(year);
        poster.appendChild(play);

        var body = document.createElement('div');
        body.className = 'movie-card-body';

        var title = document.createElement('h3');
        var titleLink = document.createElement('a');
        titleLink.href = movie.url;
        titleLink.textContent = movie.title;
        title.appendChild(titleLink);

        var meta = document.createElement('p');
        meta.className = 'movie-meta';
        meta.textContent = movie.region + ' · ' + movie.type + ' · ' + movie.genre;

        var oneLine = document.createElement('p');
        oneLine.className = 'movie-one-line';
        oneLine.textContent = movie.oneLine;

        var tags = document.createElement('div');
        tags.className = 'movie-tags';
        movie.tags.slice(0, 3).forEach(function (tagText) {
            var tag = document.createElement('span');
            tag.textContent = tagText;
            tags.appendChild(tag);
        });

        body.appendChild(title);
        body.appendChild(meta);
        body.appendChild(oneLine);
        body.appendChild(tags);
        article.appendChild(poster);
        article.appendChild(body);
        return article;
    }

    var searchResults = document.querySelector('[data-search-results]');
    if (searchResults && window.MOVIE_SEARCH_DATA) {
        var query = getQuery();
        var titleNode = document.querySelector('[data-search-title]');
        var emptyNode = document.querySelector('[data-search-empty]');
        var inputs = document.querySelectorAll('input[name="q"]');

        inputs.forEach(function (input) {
            input.value = query;
        });

        if (query) {
            var normalized = query.toLowerCase();
            var words = normalized.split(/\s+/).filter(Boolean);
            var matches = window.MOVIE_SEARCH_DATA.filter(function (movie) {
                var haystack = [
                    movie.title,
                    movie.region,
                    movie.type,
                    movie.genre,
                    movie.year,
                    movie.oneLine,
                    movie.tags.join(' ')
                ].join(' ').toLowerCase();
                return words.every(function (word) {
                    return haystack.indexOf(word) !== -1;
                });
            }).slice(0, 120);

            if (titleNode) {
                titleNode.textContent = '“' + query + '” 的搜索结果';
            }

            searchResults.innerHTML = '';
            matches.forEach(function (movie) {
                searchResults.appendChild(createResultCard(movie));
            });

            if (emptyNode) {
                emptyNode.style.display = matches.length ? 'none' : 'block';
                emptyNode.textContent = matches.length ? '' : '没有找到匹配影片，请更换关键词。';
            }
        }
    }

    function loadHls(callback) {
        if (window.Hls) {
            callback();
            return;
        }

        var existing = document.querySelector('script[data-hls-loader]');
        if (existing) {
            existing.addEventListener('load', callback, { once: true });
            return;
        }

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js';
        script.async = true;
        script.setAttribute('data-hls-loader', 'true');
        script.addEventListener('load', callback, { once: true });
        document.head.appendChild(script);
    }

    function setupPlayer(frame) {
        var video = frame.querySelector('video');
        var button = frame.querySelector('[data-play-button]');
        if (!video || !button) {
            return;
        }

        var source = video.getAttribute('data-video-src');
        var hlsInstance = null;
        var attached = false;

        function playVideo() {
            frame.classList.add('is-loading');
            video.controls = true;
            var promise = video.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(function () {
                    frame.classList.remove('is-loading');
                });
            }
        }

        function attach() {
            if (attached || !source) {
                playVideo();
                return;
            }

            attached = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
                playVideo();
                return;
            }

            loadHls(function () {
                if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true,
                        backBufferLength: 90
                    });
                    hlsInstance.loadSource(source);
                    hlsInstance.attachMedia(video);
                    hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        playVideo();
                    });
                } else {
                    video.src = source;
                    playVideo();
                }
            });
        }

        button.addEventListener('click', function () {
            attach();
        });

        video.addEventListener('click', function () {
            if (video.paused) {
                attach();
            }
        });

        video.addEventListener('play', function () {
            frame.classList.add('is-playing');
            frame.classList.remove('is-loading');
        });

        video.addEventListener('pause', function () {
            frame.classList.remove('is-loading');
        });

        window.addEventListener('beforeunload', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }

    document.querySelectorAll('[data-player]').forEach(setupPlayer);
})();
