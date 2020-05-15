// 1- Para o primeiro exercício de hoje, faça um programa que, 
// dado um valor n qualquer, seja n > 1, imprima na tela um 
// quadrado feito de asteriscos de lado de tamanho n.

let n = 5; // transformar 5 em string = "*"
square = ""; // armazenar o resultado aqui

for (let line = 1; line <= n; line+=1) {
  square = square + "*"; // isso faz o square fazio adicionar um * para cada volta (iteração) que o for der.
}

for (let colum = 1; colum <= n; colum+=1){
  console.log(square); // Aqui, como não estou add mais valores à square, o for repetira o console o "n" vezes.
}