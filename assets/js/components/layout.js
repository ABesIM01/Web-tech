(() => {
  const root = new URL("../../../", document.currentScript.src).href;
  const mark =
    '<span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 26 30" fill="none"><path d="M2 2h8v26H2zM16 2h8v26h-8z" fill="currentColor"/><path d="m10 10 8 5-8 5V10Z" fill="currentColor"/></svg></span>';
  document.querySelector(
    "[data-site-header]"
  ).outerHTML = `    <header class="topbar">
      <nav class="navigation shell" aria-label="Головна навігація">
        <a class="logo" href="${root}index.html" aria-label="КАДР — головна"
          >${mark}КАДР</a
        >
        <div class="nav-links">
          <a href="${root}index.html#movies">Афіша</a><a href="${root}index.html#premieres">Рекомендуємо</a><a href="${root}index.html#about">Кінотеатр</a>
        </div>
        <div class="nav-right">
          <span class="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Київ</span>
          <a class="header-action" href="${root}index.html#movies">Обрати сеанс</a>
          <a class="header-registration" href="${root}pages/register.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg><span>Реєстрація</span></a>
        <button
          class="theme-toggle"
          type="button"
          role="switch"
          aria-label="Світла тема"
          title="Увімкнути світлу тему"
          aria-checked="false"
        >
          <span class="theme-track-sun" aria-hidden="true">☀</span>
          <span class="theme-track-moon" aria-hidden="true">☾</span>
          <span class="theme-thumb" aria-hidden="true">
            <svg class="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            <svg class="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/></svg>
          </span>
        </button>
        </div>
        <details class="mobile-menu">
          <summary aria-label="Відкрити меню">
            <span></span><span></span>
          </summary>
          <div class="menu-panel">
            <a href="${root}index.html#movies">Афіша</a><a href="${root}index.html#premieres">Рекомендуємо</a
            ><a href="${root}index.html#about">Про кінотеатр</a><a href="${root}pages/register.html">Реєстрація</a>
          </div>
        </details>
      </nav>
    </header>`;
  document.querySelector(
    "[data-site-footer]"
  ).outerHTML = `    <footer class="shell">
      <a class="logo" href="${root}index.html">${mark}КАДР</a>
      <p>
        © 2026 КАДР. Демонстраційна сторінка.<br />Розклад, ціни та кількість
        місць наведено для прикладу.
      </p>
      <div class="footer-links"><a href="${root}index.html#movies">Афіша</a><a href="${root}index.html#about">Кінотеатр</a></div>
    </footer>`;
})();
