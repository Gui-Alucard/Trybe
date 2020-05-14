// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (index in numbers) {
   if (numbers[index] > maior) {
     maior = numbers[index];
  }
}
console.log("O maior número é", maior);