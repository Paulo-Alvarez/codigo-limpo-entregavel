const somatorio = require('../funcoes/somatorio');

test('Soma simples de [1, 2, 3, 4]', () => {
  expect(somatorio([1, 2, 3, 4])).toBe(10);
});

test('Soma de array com valores negativos [-1, 2, -3]', () => {
  expect(somatorio([-1, 2, -3])).toBe(-2);
});

test('Soma de array vazio deve retornar 0', () => {
  expect(somatorio([])).toBe(0);
});

test('Lança erro se a entrada não for um array', () => {
  expect(() => somatorio('abc')).toThrow('A entrada deve ser um array.');
});

test('Lança erro se o array contiver valores não numéricos', () => {
  expect(() => somatorio([1, 'a', 3])).toThrow('Todos os elementos do array devem ser números.');
});