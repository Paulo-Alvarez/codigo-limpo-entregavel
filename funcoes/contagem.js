function contarValoresEntre(valorMinimo, valorMaximo, listaDeNumeros) {
  if (!Array.isArray(listaDeNumeros)) {
    throw new TypeError('O terceiro argumento deve ser um array de números.');
  }

  if (typeof valorMinimo !== 'number' || typeof valorMaximo !== 'number') {
    throw new TypeError('Os dois primeiros argumentos devem ser números.');
  }

  if (valorMinimo > valorMaximo) {
    throw new RangeError('O valor mínimo não pode ser maior que o valor máximo.');
  }

  let contador = 0;

  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (typeof listaDeNumeros[i] !== 'number') {
      continue; 
    }

    if (listaDeNumeros[i] >= valorMinimo && listaDeNumeros[i] <= valorMaximo) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarValoresEntre;