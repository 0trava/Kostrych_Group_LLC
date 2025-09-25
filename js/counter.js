document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".line-item h2");

  const animateCount = (el, target) => {
    let current = 0;
    const increment = Math.ceil(target / 100); // швидкість приросту
    const duration = 2000; // загальний час анімації (мс)
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString("uk-UA");
        clearInterval(timer);
      } else {
        el.textContent = current.toLocaleString("uk-UA");
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const h2 = entry.target;
          const target = +h2.dataset.target;
          h2.classList.add("counting");
          animateCount(h2, target);
          obs.unobserve(h2); // запускаємо тільки один раз
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(h2 => observer.observe(h2));
});
