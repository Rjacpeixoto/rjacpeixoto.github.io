// Scroll suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Tema claro/escuro
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Formulário (simulação + pronto para backend)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("status").innerText = "Enviando...";

  setTimeout(() => {
    document.getElementById("status").innerText = "Mensagem enviada com sucesso!";
  }, 1000);
});

// Animações ScrollReveal
ScrollReveal().reveal('.hero', { delay: 200 });
ScrollReveal().reveal('.section', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.card', { interval: 200 });
