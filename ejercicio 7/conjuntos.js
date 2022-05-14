// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

let familia = new Set(["Gabriel", "Carmen", "Gustavo", "Damian"]);

familia.add("Gabriel");
familia.add("Javascript");

console.log(familia);
