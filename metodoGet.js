let persona = {
  nombre: "Yeampier",
  apellido: "Huerta",
  email: "yeampier@gmail.com",
  edad: 22,
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

// console.log(persona.nombreCompleto); //

// En este objecto podemos visualizar que la propieda nombre completo que tiene una funcion para poder acceder a ella de esta manera tuvivos que agregar la palabra get que significa obtener y tambien esta set que es establecer o modificar

// uso de set
let persona2 = {
    nombre: "Yeampier",
    apellido: "Huerta",
    email: "yeampier@gmail.com",
    edad: 22,
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase()
    },
    get nombreCompleto() {
      return this.nombre + " " + this.apellido;
    },
  };
  console.log(persona2.lang);

  persona2.lang = "es"

  console.log(persona2.lang);
  
