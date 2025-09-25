const heroBg = document.querySelector('.hero__bg');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY * 0.2; // чим менше число, тим плавніше
  heroBg.style.backgroundPosition = `center calc(50% + ${scrolled}px)`;
});
