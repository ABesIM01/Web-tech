(() => {
  const clock = document.querySelector('#current-time');
  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('uk-UA', { hour12: false });
    clock.dateTime = now.toISOString();
  }
  updateClock();
  setInterval(updateClock, 1000);

  const toggle = document.querySelector('.theme-toggle');
  function setTheme(theme) {
    const light = theme === 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    const label = light ? 'Увімкнути темну тему' : 'Увімкнути світлу тему';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('aria-pressed', String(light));
    toggle.title = label;
    toggle.firstElementChild.textContent = light ? '☾' : '☀';
    document.querySelector('meta[name="theme-color"]').content = light ? '#ffffff' : '#101112';
  }
  setTheme(document.documentElement.dataset.theme);
  toggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(theme);
    try { localStorage.setItem('cinema-theme', theme); } catch { /* Optional storage. */ }
  });
  window.addEventListener('storage', event => {
    if (event.key === 'cinema-theme' || event.key === null) setTheme(event.newValue);
  });
  document.querySelectorAll('.menu-panel a').forEach(link => {
    link.addEventListener('click', () => { document.querySelector('.mobile-menu').open = false; });
  });
})();
