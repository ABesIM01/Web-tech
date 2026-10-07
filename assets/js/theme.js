// Apply the saved theme before the page is painted.
(() => {
  let theme = 'dark';
  try {
    if (localStorage.getItem('cinema-theme') === 'light') theme = 'light';
  } catch { /* The theme also works when storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#ffffff' : '#101112';
})();
