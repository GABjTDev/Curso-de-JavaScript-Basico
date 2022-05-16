//  Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function Fibonacci(num) {
  let nums = [1, 1];

  for (let i = 0; i < num; i++) {
    if (nums.length < num) {
      nums.push(nums[nums.length - 1] + nums[i]);
    }
  }

  return nums;
}

const nums = Fibonacci(6);
console.log(nums);
