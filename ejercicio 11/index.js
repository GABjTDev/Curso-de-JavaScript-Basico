// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos

class Estudiante {
  nombre;
  asignaturas;

  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    console.log(
      `El estudiantes se llama ${this.nombre} y tiene de materias ${this.asignaturas}`
    );
  }
}

let nombre = new Estudiante("Gabriel", "Javascript, HTML, CSS");
nombre.obtenDatos();
