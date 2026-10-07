// CSS відповідає за анімацію, JS — лише за вибір слайдів.
(() => {
  const hero = document.querySelector(".hero-grid");
  hero.append(
    document.querySelector("#more-premieres").content.cloneNode(true)
  );
  const slides = [...hero.children];
  const dots = [...document.querySelectorAll(".slider-dot")];
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let active = 0;
  let timer;
  let gesture = null;
  slides.forEach((slide, index) => {
    slide.id = `premiere-${index + 1}`;
    dots[index].setAttribute("aria-controls", slide.id);
    slide.querySelector("img").draggable = false;
  });

  function render() {
    slides.forEach((slide, index) => {
      const visible = index === active;
      slide.classList.toggle("is-visible", visible);
      slide.inert = !visible;
      slide.setAttribute("aria-hidden", String(!visible));
      dots[index].classList.toggle("active", index === active);
      if (visible) dots[index].setAttribute("aria-current", "true");
      else dots[index].removeAttribute("aria-current");
    });
  }
  render();
  hero.classList.add("carousel-ready");
  reducedMotion.addEventListener("change", render);
  const pause = document.querySelector(".slider-pause");
  let paused = false;
  pause.addEventListener("click", () => {
    paused = !paused;
    pause.setAttribute("aria-pressed", String(paused));
    pause.textContent = paused ? "Продовжити" : "Пауза";
    restartTimer();
  });

  function selectSlide(index) {
    active = (index + slides.length) % slides.length;
    render();
    restartTimer();
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (
        document.hidden ||
        reducedMotion.matches ||
        paused ||
        gesture ||
        hero.matches(":focus-within")
      )
        return;
      active = (active + 1) % slides.length;
      render();
    }, 8000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => selectSlide(index));
    dot.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % slides.length;
      else if (event.key === "ArrowLeft")
        next = (index + slides.length - 1) % slides.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = slides.length - 1;
      else return;
      event.preventDefault();
      dots[next].focus();
      selectSlide(next);
    });
  });

  hero.addEventListener("pointerdown", (event) => {
    if (
      !event.isPrimary ||
      event.button !== 0 ||
      event.target.closest("a, button")
    )
      return;
    if (
      event.pointerType === "mouse" &&
      !event.target.closest(".feature-visual")
    )
      return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
    hero.setPointerCapture(event.pointerId);
  });
  hero.addEventListener("pointerup", (event) => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      selectSlide(active + (dx < 0 ? 1 : -1));
    }
  });
  const cancelGesture = () => {
    gesture = null;
  };
  hero.addEventListener("pointercancel", cancelGesture);
  hero.addEventListener("lostpointercapture", cancelGesture);
  restartTimer();
})();
