// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let myPerson = {
  nombre: "Gabriel",
  apellido: "Rea",
  edad: 26,
  height: 1.77,
  eresDesarrollador: true,
};

let edad = myPerson.edad;

let persons = [
  { ...myPerson },
  {
    nombre: "Damian",
    apellido: "Lee",
    edad: 34,
    height: 1.64,
    eresDesarrollador: false,
  },
  {
    nombre: "Nicolas",
    apellido: "Alfonso",
    edad: 24,
    height: 1.73,
    eresDesarrollador: false,
  },
];

let orderAge = [...persons].sort((a, b) => b.edad - a.edad);
console.log(myPerson);
console.log(persons);
console.log(orderAge);
