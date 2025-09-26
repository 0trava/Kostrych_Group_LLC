document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeMobile = document.getElementById("closeMobile");
  const navLinks = document.querySelectorAll(".mobile-nav-list a");

  // Відкрити меню
  mobileToggle.addEventListener("click", () => {
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
  });

  // Закрити по кнопці ✕
  closeMobile.addEventListener("click", () => {
    closeMenu();
  });

  // Закрити по кліку поза меню
  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) {
      closeMenu();
    }
  });

  // Закрити після кліку на пункт меню
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  function closeMenu() {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
  }
});
