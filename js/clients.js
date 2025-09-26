document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let index = 0;
  let interval;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevSlide() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  // запуск автопрокрутки
  startAutoPlay();

  // стоп при наведенні
  document.querySelector(".clients-testimonials").addEventListener("mouseenter", stopAutoPlay);
  document.querySelector(".clients-testimonials").addEventListener("mouseleave", startAutoPlay);
});
