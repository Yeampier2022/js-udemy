// suma los primeros 5 numeros (for)


let maximo = 5
let sumaResultado = 0

for(numero = 1; numero <= maximo; numero++) {
    console.log(`${sumaResultado} + ${numero}`);
    sumaResultado +=  numero
    console.log(sumaResultado);
}
console.log(`La sumad e los primeros ${maximo} numero es: ${sumaResultado}`);