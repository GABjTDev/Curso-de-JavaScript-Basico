// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
// - Crea el fichero .eslintrc.json
// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
// - Crea un script en el package.json para corregir automáticamente todos los errores
// - Ejecuta el script a través del terminal

// Métodos de cadenas de texto (parte 2)
const input = "ESCORpio";
const db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar dos cadenas de caracteres
const str_1 = "Hola soy la primera cadena.";
const str_2 = "Y yo soy la segunda cadena.";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
const str_3 = "    Hola soy un string con espacios al final.   ";
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posición
const str_4 = "Hola soy el string número 4"; // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posición de una palabra dentro de una cadena de caracteres
const str_5 =
  "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar";
console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));
