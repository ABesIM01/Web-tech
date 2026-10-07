// YouTube IFrame Player API: автоматичне відтворення без звуку.
(() => {
  const section = document.querySelector(".movie-trailer");
  if (!section) return;
  const sound = section.querySelector(".trailer-sound");
  const status = section.querySelector(".trailer-status");
  let player;
  let ready = false;
  let soundEnabled = false;

  function showFallback(message) {
    ready = false;
    sound.disabled = true;
    status.textContent = message;
  }

  function toggleSound() {
    if (!ready) return;
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      player.unMute();
      player.setVolume(80);
      player.playVideo();
    } else {
      player.mute();
    }
    sound.textContent = soundEnabled ? "Вимкнути звук" : "Увімкнути звук";
    sound.setAttribute("aria-pressed", String(soundEnabled));
    status.textContent = soundEnabled
      ? "Звук увімкнено."
      : "Трейлер відтворюється без звуку. Натисни кнопку «Увімкнути звук» над відео.";
  }
  sound.addEventListener("click", toggleSound);

  if (!/^https?:$/.test(location.protocol)) {
    showFallback(
      "Для перегляду трейлера відкрий сайт через Live Server або скористайся посиланням на YouTube."
    );
    return;
  }

  const timeout = setTimeout(() => {
    if (!ready)
      showFallback(
        "Не вдалося завантажити трейлер. Спробуй оновити сторінку або дивись на YouTube."
      );
  }, 15000);

  function createPlayer() {
    player = new YT.Player("trailer-player", {
      videoId: section.dataset.videoId,
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        mute: 1,
        playsinline: 1,
        rel: 0,
        origin: location.origin,
      },
      events: {
        onReady(event) {
          clearTimeout(timeout);
          ready = true;
          const iframe = event.target.getIframe();
          iframe.title = `Трейлер — ${
            document.querySelector("#movie-title").textContent
          }`;
          iframe.setAttribute(
            "allow",
            "autoplay; encrypted-media; picture-in-picture; fullscreen"
          );
          iframe.setAttribute(
            "referrerpolicy",
            "strict-origin-when-cross-origin"
          );
          event.target.mute();
          sound.disabled = false;
          event.target.playVideo();
        },
        onAutoplayBlocked() {
          status.textContent =
            "Натисни кнопку «Увімкнути звук» над відео, щоб почати перегляд зі звуком.";
        },
        onError() {
          clearTimeout(timeout);
          showFallback(
            "Трейлер недоступний у вбудованому програвачі. Спробуй переглянути його на YouTube."
          );
        },
      },
    });
  }

  if (window.YT?.Player) {
    createPlayer();
  } else {
    window.onYouTubeIframeAPIReady = createPlayer;
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      clearTimeout(timeout);
      showFallback(
        "Не вдалося підключитися до YouTube. Спробуй оновити сторінку або перейти за посиланням нижче."
      );
    };
    document.head.append(script);
  }
})();
