document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav-list a");

  function onScroll() {
    let scrollPos = window.scrollY + 120; // відступ від хедера
    let currentId = null;

    sections.forEach(section => {
      const id = section.getAttribute("id");
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        currentId = id;
      }
    });

    // Прибираємо активний клас з усіх
    navLinks.forEach(link => {
      link.classList.remove("navigation-ative");
    });

    // Додаємо лише одному (якщо знайшли)
    if (currentId) {
      const activeLink = document.querySelectorAll(
        `.desktop-nav a[href="#${currentId}"], .mobile-nav-list a[href="#${currentId}"]`
      );
      activeLink.forEach(link => link.classList.add("navigation-ative"));
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // одразу при завантаженні
});
