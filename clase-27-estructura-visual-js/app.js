document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('demoBtn');
  const out = document.getElementById('output');
  btn.addEventListener('click', () => {
    out.textContent = '¡Hola! Has hecho clic en el botón — Clase 27.';
    console.log('Botón clicado — Clase 27');
  });
});
