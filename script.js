document.addEventListener("DOMContentLoaded", () => {

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  window.scrollToSection = scrollToSection;

  const toggle = document.getElementById("themeToggle");
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  // Tema
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggle.innerText = "☀️";
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");

      const isLight = document.body.classList.contains("light");
      toggle.innerText = isLight ? "☀️" : "🌙";

      localStorage.setItem("theme", isLight ? "light" : "dark");

      toggle.style.transform = "rotate(180deg)";
      setTimeout(() => toggle.style.transform = "rotate(0deg)", 300);
    });
  }

  // Form
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      status.innerText = "Enviando...";
      status.style.color = "gray";

      setTimeout(() => {
        status.innerText = "Mensagem enviada com sucesso!";
        status.style.color = "lightgreen";
        form.reset();
      }, 1000);
    });
  }

  // ScrollReveal
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 800,
      easing: 'ease-out',
      reset: false
    });

    sr.reveal('.hero', { delay: 200 });
    sr.reveal('.section', { delay: 200, origin: 'bottom' });
    sr.reveal('.card', { interval: 200 });
  }

  // Navbar active
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        let current = "";

        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
          }
        });

        ticking = false;
      });

      ticking = true;
    }
  });

});
