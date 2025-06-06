document.addEventListener('DOMContentLoaded', () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      // Ativa o menu hamburguer após inserir o header
      const hamburger = document.getElementById('hamburger-btn');
      const nav = document.querySelector('header nav');
      if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
          nav.classList.toggle('active');
        });
      }

      // Marca o link ativo
      markActiveLink();
    });

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

function markActiveLink() {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}