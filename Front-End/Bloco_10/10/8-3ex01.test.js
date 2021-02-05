/*
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

const sum = require('./8-3ex01');

describe('Teste a função sum', () => {
  test('should return 9 receiving (4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('should return 0 receiving (0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('should throw an error with (4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError();
  });
  test('should throw an error message "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});