// CSS відповідає за анімацію, JS — лише за вибір слайдів.
(() => {
  const hero = document.querySelector('.hero-grid');
  hero.append(document.querySelector('#more-premieres').content.cloneNode(true));
  const slides = [...hero.children];
  const dots = [...document.querySelectorAll('.slider-dot')];
  const mobile = matchMedia('(max-width: 760px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;

  function render() {
    slides.forEach((slide, index) => {
      const visible = reducedMotion.matches || (mobile.matches
        ? index === active
        : Math.floor(index / 3) === Math.floor(active / 3));
      slide.classList.toggle('is-visible', visible);
      slide.inert = !visible;
      slide.setAttribute('aria-hidden', String(!visible));
      dots[index].classList.toggle('active', index === active);
    });
  }
  render();
  hero.classList.add('carousel-ready');
  mobile.addEventListener('change', render);
  reducedMotion.addEventListener('change', render);
  setInterval(() => {
    if (document.hidden || reducedMotion.matches || hero.matches(':hover, :focus-within')) return;
    active = (mobile.matches ? active + 1 : (Math.floor(active / 3) + 1) * 3) % slides.length;
    render();
  }, 8000);
})();
