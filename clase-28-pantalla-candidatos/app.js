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

// Clase 28: Interactividad de perfiles
const botonesPerfil = document.querySelectorAll(".btnPerfil");
const detallePerfil = document.getElementById("detallePerfil");

botonesPerfil.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const perfil = boton.getAttribute("data-perfil");

    detallePerfil.innerHTML = `
      <h3>Información del perfil</h3>
      <p><strong>Perfil seleccionado:</strong> ${perfil}</p>
      <p>
        Este perfil es ficticio y se utiliza únicamente como parte de una práctica académica
        para aprender a construir interfaces de participación ciudadana.
      </p>
      <p>
        No corresponde a una candidatura real, no permite votar y no debe usar datos personales reales.
      </p>
    `;
  });
});

// Clase 28: Interactividad de perfiles
const botonesPerfil = document.querySelectorAll(".btnPerfil");
const detallePerfil = document.getElementById("detallePerfil");

botonesPerfil.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const perfil = boton.getAttribute("data-perfil");

    detallePerfil.innerHTML = `
      <h3>Información del perfil</h3>
      <p><strong>Perfil seleccionado:</strong> ${perfil}</p>
      <p>
        Este perfil es ficticio y se utiliza únicamente como parte de una práctica académica
        para aprender a construir interfaces de participación ciudadana.
      </p>
      <p>
        No corresponde a una candidatura real, no permite votar y no debe usar datos personales reales.
      </p>
    `;
  });
});
