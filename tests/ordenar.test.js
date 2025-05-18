const quicksort = require('../funcoes/ordenar');

test('Ordena um array simples [3, 1, 2]', () => {
  expect(quicksort([3, 1, 2])).toEqual([1, 2, 3]);
});

test('Ordena um array já ordenado [1, 2, 3, 4]', () => {
  expect(quicksort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('Ordena array com elementos repetidos [4, 2, 2, 8]', () => {
  expect(quicksort([4, 2, 2, 8])).toEqual([2, 2, 4, 8]);
});

test('Lança erro se entrada não for um array', () => {
  expect(() => quicksort('abc')).toThrow('A entrada deve ser um array.');
});

test('Lança erro se o array contiver valores não numéricos', () => {
  expect(() => quicksort([1, 'a', 3])).toThrow('Todos os elementos do array devem ser números.');
});