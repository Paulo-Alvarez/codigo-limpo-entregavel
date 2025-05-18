function calcularMDC(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Os valores devem ser números inteiros.');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }

  return a;
}

module.exports = calcularMDC;
