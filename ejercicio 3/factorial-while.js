// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let num = 10;
let factorial = 1;
let x = 1;

while (x <= num) {
  factorial *= x;
  x++;
}

console.log(factorial);
