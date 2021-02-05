const myRemove = require('./ex004');

/*
4. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse
array sem o elemento item caso ele exista no array

Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('myRemove', () => {
  test('should remove 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  })

  test('should not return newArr', () => {
    const newArr = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).not.toContainEqual(newArr);
  })

  test('should have no changes', () => {
    const newArr = [2, 85, 153, 0, -3];
    expect(myRemove([2, 85, 153, 0, -3], -85)).toEqual(newArr);
  })

  test('should return newArr', () => {
    const newArr = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  })
});
