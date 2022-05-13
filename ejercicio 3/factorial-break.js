// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let num = 10;
let factorial = 1;
let x = 1;

while (true) {
  factorial *= x;
  x++;
  if (x > num) {
    break;
  }
}

console.log(factorial);
