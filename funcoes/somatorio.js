function somatorio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new Error('A entrada deve ser um array.');
  }

  for (let numero of numeros) {
    if (typeof numero !== 'number') {
      throw new Error('Todos os elementos do array devem ser números.');
    }
  }

  return numeros.reduce((soma, numero) => soma + numero, 0);
}

module.exports = somatorio;