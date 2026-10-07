(() => {
  const root = new URL('../../../', document.currentScript.src).href;
  document.querySelector('[data-site-header]').outerHTML = `    <header class="topbar">
      <nav class="navigation shell" aria-label="Головна навігація">
        <a class="logo" href="${root}index.html" aria-label="КАДР — головна"
          ><span class="logo-mark" aria-hidden="true">◧</span> КАДР<span
            class="logo-dot"
            >®</span
          ></a
        >
        <div class="nav-links">
          <a href="${root}index.html#movies">Афіша</a><a href="${root}index.html#premieres">Скоро в кіно</a>
        </div>
        <div class="clock">
          <span class="live-dot" aria-hidden="true"></span
          ><time id="current-time">--:--:--</time
          ><span class="clock-label">МІСЦЕВИЙ ЧАС</span>
        </div>
        <div class="nav-right">
          <a href="${root}index.html#about">Про кінотеатр <span aria-hidden="true">↗</span></a
          ><span class="location">Київ, Україна</span>
        </div>
        <button
          class="theme-toggle"
          type="button"
          aria-label="Увімкнути світлу тему"
          title="Увімкнути світлу тему"
          aria-pressed="false"
        >
          <span aria-hidden="true">☀</span>
        </button>
        <details class="mobile-menu">
          <summary aria-label="Відкрити меню">
            <span></span><span></span>
          </summary>
          <div class="menu-panel">
            <a href="${root}index.html#movies">Афіша</a><a href="${root}index.html#premieres">Скоро в кіно</a
            ><a href="${root}index.html#about">Про кінотеатр</a>
          </div>
        </details>
      </nav>
    </header>`;
  document.querySelector('[data-site-footer]').outerHTML = `    <footer class="shell">
      <a class="logo" href="${root}index.html">◧ КАДР<span class="logo-dot">®</span></a>
      <p>
        © 2026 КАДР. Демонстраційна сторінка.<br />Розклад, ціни та кількість
        місць наведено для прикладу.
      </p>
      <span
        >ЗРОБЛЕНО ДЛЯ ЛЮБОВІ ДО КІНО <span class="footer-star">✳</span></span
      >
    </footer>`;
})();
