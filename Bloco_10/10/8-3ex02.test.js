/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const myRemove = require('./8-3ex02');

describe('Test if myRemove', () => {
  test('should return without 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  test('should not return the same', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
  test('should not suffer changes', async () => {
    const arrayTest = await myRemove([2, 5, 7], 5);
    expect(myRemove(arrayTest, 5)).toStrictEqual([2, 7]);
    expect(arrayTest).toContainEqual(2, 5, 7);
  });
  test('should return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});