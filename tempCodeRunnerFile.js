// funcion constructor de objecto de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}


let padre = new Persona("Yeampier", "Huerta", "fake@gmail.com")
console.log(padre);

let madre = new Persona("Yuleidy", "Huerta", "fake2@gmail.com")
console.log(madre);

padre.nombre="Gustavo";
console.log(padre);
console.log(madre);
