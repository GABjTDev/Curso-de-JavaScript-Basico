// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

let myName = "Gabriel";
let age = 26;
let yourDev = true;
let bornDay = new Date("1996/03/24").toLocaleDateString();
let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J. K. Rowling",
  date: new Date("1997/06/26").toLocaleDateString(),
  url: "www.Harry-Potter.com",
};

console.log(myName);
console.log(age);
console.log(yourDev);
console.log(bornDay);
console.log(book);
