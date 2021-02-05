// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaIndex;
for (somaIndex in numbers) {
  somaIndex = somaIndex + numbers[somaIndex];
}
console.log(somaIndex / numbers.length);