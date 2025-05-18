function quicksort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('A entrada deve ser um array.');
  }

  if (arr.length <= 1) {
    return arr;
  }

  const [pivot, ...rest] = arr;
  const left = [];
  const right = [];

  for (let i = 0; i < rest.length; i++) {
    if (typeof rest[i] !== 'number') {
      throw new Error('Todos os elementos do array devem ser números.');
    }

    if (rest[i] < pivot) {
      left.push(rest[i]);
    } else {
      right.push(rest[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

module.exports = quicksort;