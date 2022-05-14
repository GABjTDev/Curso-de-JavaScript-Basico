// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let list = ["Leche", "Pan", "Galletitas", "Agua", "Frutas"];
let newList = [...list, "Aceite de Girasol"];
let removeOil = newList.slice(0, -1);

let movies = [
  {
    titulo: "Iron Man",
    director: "Jon Favreau",
    fecha: new Date("2008/04/12").toLocaleDateString("en"),
  },
  {
    titulo: "Zack Snyder's Justice League",
    director: "Zack Snyder",
    fecha: new Date("2021/07/24").toLocaleDateString("en"),
  },
  {
    titulo: "Superman",
    director: "Zack Snyder",
    fecha: new Date("2013/06/14").toLocaleDateString("en"),
  },
];

let moviesFilter = movies.filter(
  (movie) => new Date(movie.fecha) <= new Date("2010/01/01")
);

let directorMovies = movies.map((movie) => movie.director);
let titleMovies = movies.map((movie) => movie.titulo);

let concatTitlesDirectors = directorMovies.concat(titleMovies);
let factorTitlesDirectors = [...directorMovies, ...titleMovies];

console.log(list);
console.log(newList);
console.log(removeOil);
console.log(movies);
console.log(moviesFilter);
console.log(directorMovies);
console.log(titleMovies);
console.log(concatTitlesDirectors);
console.log(factorTitlesDirectors);
