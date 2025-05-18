const ehPrimo = require('../funcoes/numeroprimo');

test('7 deve ser identificado como número primo', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('10 não deve ser identificado como número primo', () => {
  expect(ehPrimo(10)).toBe(false);
});

test('2 deve ser identificado como número primo', () => {
  expect(ehPrimo(2)).toBe(true);
});

test('Número menor que 2 não é primo (ex: 1)', () => {
  expect(ehPrimo(1)).toBe(false);
});

test('Deve lançar erro se a entrada não for um número inteiro', () => {
  expect(() => ehPrimo('dez')).toThrow('A entrada deve ser um número inteiro.');
});