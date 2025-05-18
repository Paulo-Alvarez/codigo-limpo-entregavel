function ehPrimo(numero) {
  if (!Number.isInteger(numero)) {
    throw new Error('A entrada deve ser um número inteiro.');
  }

  if (numero < 2) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) return false;
  }

  return true;
}

module.exports = ehPrimo;