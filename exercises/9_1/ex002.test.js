const myIndexOf = require('./ex002');

/*
2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice
do item ou -1 caso o item não pertença ao array arr

Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
*/

describe('myIndexOf', () => {
  test('should contain 3 at index 2', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  })

  test('should not contain 5 & return -1', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  })
});