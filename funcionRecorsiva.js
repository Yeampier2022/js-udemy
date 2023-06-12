function funcionRecursica(numero) {
  // caso base
  if (numero == 1) {
    console.log(numero);
  } else {
    // caso recursivo
    funcionRecursica(numero - 1);
    console.log(numero);
  }
}
funcionRecursica(5)
