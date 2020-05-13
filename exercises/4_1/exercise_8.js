//Escreva um programa que defina três números em variáveis no seu começo e
//retorne true se uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.
let num1 = 19;
let num2 = 18;
let num3 = 27;
ePar = false;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  ePar = true;
}
console.log(ePar);