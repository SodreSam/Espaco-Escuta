document.addEventListener('DOMContentLoaded', function () {
  const btnAutoavaliacao = document.getElementById('btn-autoavaliacao');
  const btnAutocuidado = document.getElementById('btn-autocuidado');

  btnAutoavaliacao.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'autoavaliacao.html';
  });

  btnAutocuidado.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'autocuidado.html';
  });
});


