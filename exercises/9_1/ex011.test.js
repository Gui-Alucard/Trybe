const isAbove = require('./ex011');

/*
11. Faça o teste de uma função que compara dois números e retorna true
se o primeiro for maior que o segundo e false caso contrário.
*/

describe('isAbove', () => {
  test('should be true', () => {
    expect(isAbove(3, 2)).toBeTruthy();
  })

  test('should be false', () => {
    expect(isAbove(12, 13)).toBeFalsy();
  })
});