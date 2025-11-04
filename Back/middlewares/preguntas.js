//Banco de preguntas

const preguntas = [
  { id: 1, texto: "¿Qué tipo de lenguaje es JavaScript?" },
  { id: 2, texto: "¿Qué diferencia hay entre 'var', 'let' y 'const'?" },
  { id: 3, texto: "¿Qué es una función de flecha (arrow function)?" },
  { id: 4, texto: "¿Qué valor devuelve typeof null?" },
  { id: 5, texto: "¿Qué es el DOM y para qué sirve?" },
  { id: 6, texto: "¿Qué es una promesa (Promise) en JavaScript?" },
  { id: 7, texto: "¿Qué hace el método map() en un arreglo?" },
  { id: 8, texto: "¿Qué diferencia hay entre == y === en JavaScript?" },
  { id: 9, texto: "¿Qué es el event loop y por qué es importante?" },
  { id: 10, texto: "¿Qué es el objeto 'this' y cómo cambia según el contexto?" },
  { id: 11, texto: "¿Qué significa 'hoisting' en JavaScript?" },
  { id: 12, texto: "¿Qué es JSON y para qué se utiliza?" },
  { id: 13, texto: "¿Qué es una función callback?" },
  { id: 14, texto: "¿Qué hace el método filter() en un arreglo?" },
  { id: 15, texto: "¿Qué diferencia hay entre null y undefined?" },
  { id: 16, texto: "¿Qué hace el método fetch() y qué devuelve?" }
];

function obtenerPreguntasAleatorias(cantidad) {
  const copia = [...preguntas]; // usamos ... que se llama spread y que copia la variable original(Array) en otra variable diferente
  const seleccionadas = [];

  while (seleccionadas.length < cantidad && copia.length > 0) {
    const index = Math.floor(Math.random() * copia.length);
    //Usamos splice para mandar elementos de la copia a seleccionadas y que luego sean eliminados de la copia, 
    //y el arreglo que nos retorno tomamos la posicion 0 para pushearla en seleccionadas
    // Saca 1 elemento de copia en la posición index,
    // y de ese arreglo que devuelve splice, dame el primer (y único) elemento.
    seleccionadas.push(copia.splice(index, 1)[0]);
  }

  return seleccionadas;
}

// Exportar para usarlo en otros archivos (por ejemplo, en una ruta)
module.exports = { obtenerPreguntasAleatorias };