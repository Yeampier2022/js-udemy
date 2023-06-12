// funcion constructor de objecto de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

let padre = new Persona("Yeampier", "Huerta", "fake@gmail.com");
console.log(padre);

let madre = new Persona("Yuleidy", "Huerta", "fake2@gmail.com");
console.log(madre);

padre.nombre = "Gustavo";
console.log(padre);
console.log(madre);

// Distinta maneras de crear objectos
let miObjecto = new Object();
let miObjecto2 = {};

let miCadena1 = new String();
let miCadena2 = "";

let miNumero = new Number(1);
let minumero2 = 1;

let boolean = new Boolean(true);
let boolean2 = true;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {};
