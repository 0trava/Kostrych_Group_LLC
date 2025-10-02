document.addEventListener("DOMContentLoaded", () => {
  const loop = document.querySelector(".scroll-loop");
  // дублюємо вміст для безшовного циклу
  loop.innerHTML += loop.innerHTML;
});