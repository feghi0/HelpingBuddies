// === Helping Buddies - Interactividad con animación ===

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  // Animación al hacer scroll
  const sections = document.querySelectorAll('.section, .intro-content');
  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection();

  // Formulario de contacto
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      msg.textContent = 'Por favor, completá todos los campos.';
      msg.style.color = 'red';
      return;
    }

    msg.textContent = `¡Gracias por contactarte, ${nombre}! Te responderemos pronto.`;
    msg.style.color = 'green';
    form.reset();
  });
  // Desplegable admin
    const logoMenu = document.getElementById("logoMenu");
    const dropdown = document.getElementById("adminDropdown");

    logoMenu.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    });

    window.addEventListener("click", (e) => {
    if (!logoMenu.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
    });
});
