function gerarSequenciaFibonacci(quantidade) {
  if (typeof quantidade !== 'number' || !Number.isInteger(quantidade)) {
    throw new Error('A quantidade deve ser um número inteiro.');
  }

  if (quantidade < 2) {
    throw new Error('A quantidade deve ser maior ou igual a 2.');
  }

  const sequencia = [0, 1];

  for (let i = 2; i < quantidade; i++) {
    const proximoValor = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximoValor);
  }

  return sequencia;
}

module.exports = gerarSequenciaFibonacci;