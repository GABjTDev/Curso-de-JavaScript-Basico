// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
// - Otra cadena de texto con tu Apellido
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// - Una variable que contenga la primera letra del Nombre
// - Otra variable que contenga la última letra del Apellido
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let firstName = "Gabriel";
let lastName = "Rea";
let student = firstName + " " + lastName;
let studentMayus = student.toUpperCase();
let studentMinus = student.toLowerCase();
let studentLength = student.length;
let firstLetter = student.charAt(0);
let lastLetter = student.charAt(student.length - 1);
let noSpace = student.replace(/ /g, "");
let isTrue = student.includes(firstName);

console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("student", student);
console.log("studentMayus", studentMayus);
console.log("studentMinus", studentMinus);
console.log("studentLength", studentLength);
console.log("firstLetter", firstLetter);
console.log("lastLetter", lastLetter);
console.log("noSpace", noSpace);
console.log("isTrue", isTrue);
