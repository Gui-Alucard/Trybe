const sum = require('./ex001');

/*
A função sum(a, b) retorna a soma do parâmetro a com o b

Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
*/

describe('sum', () => {
  // test commom values
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  
  // Para erros devo fazer dessa forma
  test('should throw an error if receive a string', () => {
    expect(() => { sum(4, "5") })
    .toThrow(/parameters must be numbers/);
  })
  
  test('the message is "parameters must be numbers"', () => {
    function msgSum() { // crie uma function para a msg da function
      sum(4, "5");
    }
    // Test the exact error message
    expect(msgSum).toThrowError(new Error('parameters must be numbers'));
  })
});