// Datos de candidatos para Clase 28
const candidatos = [
  { id: 1, nombre: "Candidato 1", propuesta: "Propuesta 1" },
  { id: 2, nombre: "Candidato 2", propuesta: "Propuesta 2" },
  { id: 3, nombre: "Candidato 3", propuesta: "Propuesta 3" }
];

document.addEventListener('DOMContentLoaded', () => {
  const seccion = document.getElementById('candidatos');
  
  candidatos.forEach(candidato => {
    const div = document.createElement('div');
    div.className = 'candidato';
    div.innerHTML = `
      <h3>${candidato.nombre}</h3>
      <p>${candidato.propuesta}</p>
      <button onclick="alert('Votación: ${candidato.nombre}')">Más información</button>
    `;
    seccion.appendChild(div);
  });
});
