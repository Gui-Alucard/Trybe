/*
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e
verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

const myRemoveWithoutCopy = require('./8-3ex03');

describe('Test if myRemoveWithoutCopy...', () => {
  test('should return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  test('should not return the same param', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
  test('should verify if suffer changes', async () => {
    const newArr = await myRemoveWithoutCopy([2, 4, 7, 19, 28], 7);
    expect(myRemoveWithoutCopy(newArr, 7)).toStrictEqual([2, 4, 19, 28]);
    expect(newArr).toContainEqual(2, 4, 7, 19, 28);
  });
  test('should return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});