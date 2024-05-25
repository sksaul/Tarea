// personaje de la tv
let nombre = "Goku";
let anime = "Dragon ball";
let edad = 200;

let personaje = {
    nombre: "Goku",
    anime: "Dragon ball",
    edad: "200",
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 300; 

let llave = 'edad';
personaje ['edad'] = 3402;


delete personaje.anime;

console.log(personaje);

