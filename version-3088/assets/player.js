function initMoviePlayer(videoId, layerId, buttonId, sourceUrl) {
  var video = document.getElementById(videoId);
  var layer = document.getElementById(layerId);
  var button = document.getElementById(buttonId);
  var hls = null;
  var loaded = false;

  if (!video || !sourceUrl) {
    return;
  }

  function loadVideo() {
    if (loaded) {
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(sourceUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = sourceUrl;
    } else {
      video.src = sourceUrl;
    }

    loaded = true;
  }

  function hideLayer() {
    if (layer) {
      layer.classList.add("is-hidden");
    }
  }

  function startPlayback() {
    loadVideo();
    hideLayer();
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {
        if (layer) {
          layer.classList.remove("is-hidden");
        }
      });
    }
  }

  if (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      startPlayback();
    });
  }

  if (layer) {
    layer.addEventListener("click", function () {
      startPlayback();
    });
  }

  video.addEventListener("click", function () {
    if (video.paused) {
      startPlayback();
    }
  });

  video.addEventListener("play", hideLayer);

  window.addEventListener("beforeunload", function () {
    if (hls) {
      hls.destroy();
      hls = null;
    }
  });
}
