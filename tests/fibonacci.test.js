const gerarSequenciaFibonacci = require('../funcoes/fibonacci');

test('Os 10 primeiros números da sequência de Fibonacci devem ser corretos', () => {
  expect(gerarSequenciaFibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Os 2 primeiros números da sequência de Fibonacci devem ser 0 e 1', () => {
  expect(gerarSequenciaFibonacci(2)).toMatchObject([0, 1]);
});

test('Deve lançar erro se o valor for menor que 2', () => {
  expect(() => gerarSequenciaFibonacci(1)).toThrow('A quantidade deve ser maior ou igual a 2.');
});

test('Deve lançar erro se o valor não for um número inteiro', () => {
  expect(() => gerarSequenciaFibonacci('dez')).toThrow('A quantidade deve ser um número inteiro.');
});