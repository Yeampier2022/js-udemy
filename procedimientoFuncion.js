// definimos la funcion
function saludar(mensaje){
console.log(`mensaje: ${mensaje}`);

}
// llamar o invoacar la funcion
saludar("Hola Yeampier ya eres un programador")

function cambiarValor(parametro) {
    parametro[0] = 20
}

let argumento = [1 ]
console.log(`Antes de llamar la funcion: ${argumento}`);
cambiarValor(argumento)
console.log(`despues de llamar a la funcion: ${argumento}`);