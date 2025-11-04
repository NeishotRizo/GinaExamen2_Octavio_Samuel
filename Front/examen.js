// Elemento donde se mostrarán las preguntas
const contenedor = document.getElementById('contenedor-preguntas');

// Cargar preguntas desde el backend
async function cargarPreguntas() {
  try {
    const res = await fetch('http://localhost:8080/api/certificado');
    const data = await res.json();

    console.log(data.preguntas);

    if (res.ok) {
      mostrarPreguntas(data.preguntas);
      console.log("si llega")
    } else {
      contenedor.innerHTML = '<p>Error al obtener las preguntas (no data success).</p>';
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    contenedor.innerHTML = '<p>No se pudo conectar con el servidor.</p>';
  }
}

// Mostrar preguntas en el HTML
function mostrarPreguntas(preguntas) {
  contenedor.innerHTML = ''; // limpiar antes de mostrar

  preguntas.forEach((p, index) => {
    const div = document.createElement('div');
    div.classList.add('pregunta');
    div.innerHTML = `
      <h3>${index + 1}. ${p.texto}</h3>
      <textarea placeholder="Tu respuesta aquí..." rows="2" style="width:100%;"></textarea>
    `;
    contenedor.appendChild(div);
  });
}

// Ejecutar al cargar la página
cargarPreguntas();