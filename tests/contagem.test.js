const contarValoresEntre = require('../funcoes/contagem');

describe('Função contarValoresEntre', () => {
  test('Deve contar corretamente os números entre 10 e 20 na lista [5, 10, 15, 20, 25]', () => {
    expect(contarValoresEntre(10, 20, [5, 10, 15, 20, 25])).toBe(3);
  });

  test('Deve retornar 0 quando nenhum valor está entre os limites 100 e 200', () => {
    expect(contarValoresEntre(100, 200, [10, 20, 30])).toBe(0);
  });

  test('Deve lançar um erro se a lista não for um array', () => {
    expect(() => contarValoresEntre(10, 20, 'não é array')).toThrow('O terceiro argumento deve ser um array de números.');
  });

  test('Deve lançar um erro se valorMinimo for maior que valorMaximo', () => {
    expect(() => contarValoresEntre(30, 10, [10, 20, 30])).toThrow('O valor mínimo não pode ser maior que o valor máximo.');
  });
});