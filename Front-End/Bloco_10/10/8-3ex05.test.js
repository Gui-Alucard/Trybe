// Compare dois objetos (JSON) para verificar se são idênticos ou não

const { obj1, obj2, obj3 } = require('./8-3ex05');

describe('JSON comparison test', () => {
  test('should not obj1 be identical obj2', () => {
    expect(obj1).not.toContainEqual(obj2);
  });
  test('should not obj1 be identical obj3', () => {
    expect(obj1).not.toContainEqual(obj3);
  });
  test('should not obj2 be identical obj3', () => {
    expect(obj2).not.toContainEqual(obj3);
  });
  // __________The same but no identical__________
  test('should obj1 contain matchs of obj2', () => {
    expect(obj1).toMatchObject(obj2);
  });
});