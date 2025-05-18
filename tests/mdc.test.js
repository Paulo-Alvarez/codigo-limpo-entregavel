const calcularMDC = require('../funcoes/mdc');

test('MDC de 48 e 18 deve ser 6', () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

test('MDC de 0 e 10 deve ser 10', () => {
  expect(calcularMDC(0, 10)).toBe(10);
});

test('MDC de 17 e 13 (números primos entre si) deve ser 1', () => {
  expect(calcularMDC(17, 13)).toBe(1);
});

test('MDC deve lançar erro se algum valor não for número inteiro', () => {
  expect(() => calcularMDC(10, 'b')).toThrow('Os valores devem ser números inteiros.');
});