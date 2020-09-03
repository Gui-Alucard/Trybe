/*
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

const myFizzBuzz = require('./8-3ex04');

describe('Test if myFizzBuzz...', () => {
  test('should return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toStrictEqual('fizzbuzz');
  });
  test('should return buzz', () => {
    expect(myFizzBuzz(785)).toStrictEqual('buzz');
  });
  test('should return fizz', () => {
    expect(myFizzBuzz(36)).toStrictEqual('fizz');
  });
  test('should return the param', () => {
    expect(myFizzBuzz(17)).toStrictEqual(17);
  });
});