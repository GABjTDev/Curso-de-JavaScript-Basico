// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let today = new Date();
let birth = new Date("1996/03/24");
let lateDay = today.getHours() > birth.getHours();
let dayBirth = birth.getDate();
let monthBirth = birth.getMonth() + 1;
let yearBirth = birth.getFullYear();

console.log(today);
console.log(birth);
console.log(lateDay);
console.log(dayBirth);
console.log(monthBirth);
console.log(yearBirth);
