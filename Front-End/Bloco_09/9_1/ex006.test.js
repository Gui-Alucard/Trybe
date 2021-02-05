const myFizzBuzz = require('./ex006');

/*
6. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número
for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3,
retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja
divísivel por 3 ou 5 e retorna false caso num não seja um número

Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('myFizzBuzz', () => {
  test('should return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  })

  test('should return "fizz"', () => {
    expect(myFizzBuzz(27)).toBe("fizz");
  })

  test('should return "buzz"', () => {
    expect(myFizzBuzz(5555)).toBe("buzz");
  })

  test('should return the param', () => {
    expect(myFizzBuzz(197)).toEqual(197);
  })

  test('should be false', () => {
    expect(myFizzBuzz("I'll be false")).toBeFalsy();
  })
});