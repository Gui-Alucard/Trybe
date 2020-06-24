const objetos = require('./ex010');
const { obj1, obj2, obj3 } = objetos;

// 10. Compare dois objetos (JSON) para verificar se são idênticos ou não

describe('objetos', () => {
  test('compare obj1 = obj2', () => {
    expect(obj1).toEqual(obj2);
  })

  test('compare obj1 != obj3', () => {
    expect(obj1).not.toEqual(obj3);
  })

  test('compare obj2 != obj3', () => {
    expect(obj2).not.toEqual(obj3);
  })
});