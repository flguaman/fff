alert("¡Bienvenidos a 'Escapando de la Guerra'!\n\nLa Reina Victoria y el Príncipe Alberto necesitan tu ayuda para escapar de la guerra.");

const royal = {
  titulo: "Objetos para escapar de la guerra",
  ropietarios: "Reina Victoria y Príncipe Alberto",
  linterna: {
    baterias: [
      { tipo: "agotada", cantidad: 1 },
      { tipo: "buena", cantidad: 3 }
    ],
    cajaInterna: {
      contenido: {
        bateriasBuenas: [
          { tipo: "buena", cantidad: 4 },
          { tipo: "buena", cantidad: 2 }
        ],
        linterna: "funcional"
      }
    }
  },
  carruaje: {
    caballos: [
      { nombre: "Trueno", patas: { delanteraIzquierda: "bien" } },
      { nombre: "Relámpago", patas: { delanteraIzquierda: "bien" } }
    ]
  },
  caja: {
    contenido: {
      espada: {
        hoja: "oxidada",
        mango: "flojo"
      },
      cajaInterna: {
        contenido: {
          espadaBuena: {
            hoja: "afilada",
            mango: "firme"
          },
          arcoYFlechas: {
            arco: "de madera",
            flechas: 20
          }
        }
      }
    }
  },
  bolsas: [
    { tipo: "vacía" },
    { tipo: "comida", contenido: "varios" }
  ]
};

const preguntas = [
  {
    pregunta: "Para escapar, ¿qué tendrían que llevar?",
    opciones: ["a) Una bolsa con comida", "b) La espada oxidada", "c) La espada afilada"],
    respuesta: "a",
    propertyToDelete: "bolsas"
  },
  {
    pregunta: "Además de la espada, ¿qué otro objeto sería útil?",
    opciones: ["a) Un cubo de agua", "b) Un libro de poesía", "c) Un arco y flechas"],
    respuesta: "c",
    propertyToDelete: "caja"
  },
  {
    pregunta: "¿Qué tipo de pilas serían necesarias?",
    opciones: ["a) Pilas buenas", "b) Pilas malas", "c) No necesitan pilas"],
    respuesta: "a",
    propertyToDelete: "linterna"
  },
  {
    pregunta: "¿Cuántos caballos necesitan para escapar?",
    opciones: ["a) Uno", "b) Dos", "c) Ninguno"],
    respuesta: "b",
    propertyToDelete: "carruaje" 
  }
];

let puntaje = 0;

function hacerPregunta(indice) {
  if (indice >= preguntas.length) {
    let mensajeFinal = `¡Felicidades! Has completado el juego. Tu puntaje es ${puntaje}/${preguntas.length}.\n\n`;
    const objetosRestantes = Object.keys(royal).filter(key => key !== "titulo" && key !== "propietarios");
    if (objetosRestantes.length > 0) {
      mensajeFinal += "Remaining objects:\n";
      objetosRestantes.forEach(key => {
        mensajeFinal += `- ${key}\n`;
      });
    } else {
      mensajeFinal += "Ya no les quedan objetos para escapar de la guerra.\n";
    }
    alert(mensajeFinal);
    console.log("Deleted objects:", deletedObjects);
  } else {
    const preguntaActual = preguntas[indice];
    const respuesta = prompt(`${preguntaActual.pregunta}\n\n${preguntaActual.opciones.join("\n")}\n\nRespuesta:`);
    if (respuesta && respuesta.toLowerCase() === preguntaActual.respuesta) {
      alert("¡Respuesta correcta!\n\n");
      puntaje++;
    } else {
      alert("Respuesta incorrecta.\n\n");
      console.log(royal) 
      delete royal[preguntaActual.propiedadEliminar];
      deletedObjects.push(preguntaActual.propertyToDelete);
    }
    hacerPregunta(indice + 1);
  }
}

const deletedObjects = [];
hacerPregunta(0);