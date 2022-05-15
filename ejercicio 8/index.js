// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// - Una función generadora de índices pares automáticos

function returnTrue() {
  return "true";
}

function async() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hola soy una promesa");
    }, 5000);
  });
}

function* generatorIndex() {
  let id = 0;

  while (true) {
    yield (id = id + 2);

    if (id === 20) {
      return id;
    }
  }
}

console.log(returnTrue());
async().then((res) => console.log(res));
let generator = generatorIndex();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
