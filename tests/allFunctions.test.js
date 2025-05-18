const somatorio = require('../funcoes/somatorio');
const ehPrimo = require('../funcoes/numeroprimo');
const contarValoresEntre = require('../funcoes/contagem');
const gerarSequenciaFibonacci = require('../funcoes/fibonacci');
const calcularMDC = require('../funcoes/mdc');
const quicksort = require('../funcoes/ordenar');

describe('Testes para somatorio', () => {
  test('somatorio 10+20 = 30', () => {
    const resultado = somatorio([10, 20]);
    console.log('✔️ sunFunc 10+20 =', resultado);
    expect(resultado).toBe(30);
  });

  test('somatorio -10+40 = 30', () => {
    const resultado = somatorio([-10, 40]);
    console.log('✔️ sunFunc -10+40 =', resultado);
    expect(resultado).toBe(30);
  });
});

describe('Testes para ehPrimo', () => {
  test('ehPrimo 10 = false', () => {
    const resultado = ehPrimo(10);
    console.log('✔️ primeFunc 10 =', resultado);
    expect(resultado).toBe(false);
  });

  test('ehPrimo 3 = true', () => {
    const resultado = ehPrimo(3);
    console.log('✔️ primeFunc 3 =', resultado);
    expect(resultado).toBe(true);
  });
});

describe('Testes para contarValoresEntre', () => {
  test('contarValoresEntre 10,20,[5,10,15,25] = 2', () => {
    const resultado = contarValoresEntre(10, 20, [5, 10, 15, 25]);
    console.log('✔️ contFunc 10 =', resultado);
    expect(resultado).toBe(2);
  });

  test('contarValoresEntre 3,5,[1,2] = 0', () => {
    const resultado = contarValoresEntre(3, 5, [1, 2]);
    console.log('✔️ contFunc 3 =', resultado);
    expect(resultado).toBe(0);
  });
});

describe('Testes para gerarSequenciaFibonacci', () => {
  test('fibonacciFunc 5 = [0, 1, 1, 2, 3]', () => {
    const resultado = gerarSequenciaFibonacci(5);
    console.log('✔️ fibonacciFunc 5 =', resultado.join(', '));
    expect(resultado).toEqual([0, 1, 1, 2, 3]);
  });

  test('fibonacciFunc 1 lança erro', () => {
    try {
      gerarSequenciaFibonacci(1);
    } catch (e) {
      console.log('✔️ fibonacciFunc 1 → erro lançado:', e.message);
    }
    expect(() => gerarSequenciaFibonacci(1)).toThrow('A quantidade deve ser maior ou igual a 2.');
  });
});

describe('Testes para calcularMDC', () => {
  test('mdcFunc 5,10 = 5', () => {
    const resultado = calcularMDC(5, 10);
    console.log('✔️ mdcFunc 5 10 =', resultado);
    expect(resultado).toBe(5);
  });

  test('mdcFunc 1,1 = 1', () => {
    const resultado = calcularMDC(1, 1);
    console.log('✔️ mdcFunc 1 1 =', resultado);
    expect(resultado).toBe(1);
  });
});

describe('Testes para quicksort', () => {
  test('quicksort [5,4,3,1] = [1,3,4,5]', () => {
    const resultado = quicksort([5, 4, 3, 1]);
    console.log('✔️ quicksortFunc 5,4,3,1 =', resultado.join(','));
    expect(resultado).toEqual([1, 3, 4, 5]);
  });

  test('quicksort [100,4,3,150] = [3,4,100,150]', () => {
    const resultado = quicksort([100, 4, 3, 150]);
    console.log('✔️ quicksortFunc 100,4,3,150 =', resultado.join(','));
    expect(resultado).toEqual([3, 4, 100, 150]);
  });
});