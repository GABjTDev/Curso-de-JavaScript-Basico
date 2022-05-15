// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch

const logger = require("./logger");

// logger.info("Soy Info!");
// logger.debug("Soy un Debugger!");
// logger.warn("Soy un Warning!");
// logger.error("Soy un Error!");

function getError(num) {
  if (typeof num !== "number") {
    throw new Error("Not a Number");
  }

  return num;
}

try {
  const isNumber = getError("fasdas");
  console.log(isNumber);
} catch (e) {
  logger.error(`${e}`);
}
