// Utilizando for, descubra qual o menor valor contido no array e imprima-o; 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = numbers[0];

for (index in numbers) {
   if (numbers[index] < lower) {
     lower = numbers[index];
  }
}
console.log("O menor número é", lower);