const myRemoveWithoutCopy = require('./ex005');

/*
5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o
próprio array sem o elemento item caso ele exista no array

Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('myRemoveWithoutCopy', () => {
  test('should remove 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  })

  test('should not return newArr', () => {
    const someArr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContainEqual(someArr);
  })

  test('should have no changes', () => {
    const someArr = [2, 85, 153, 0, -3];
    expect(myRemoveWithoutCopy([2, 85, 153, 0, -3], -85)).toEqual(someArr);
  })

  test('should return newArr', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).not.toContain(5);
  })
});