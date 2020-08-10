// 2- Para o segundo exercício, faça o mesmo que antes, 
// mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5; // transformar 5 em string = "*"
triangulo = ""; // armazenar o resultado aqui

for (let colum = 1; colum <= n; colum+=1) {
  triangulo = triangulo + "*"; // isso faz o triangulo fazio adicionar um * para cada volta (iteração) que o for der.
  console.log(triangulo); // o console dentro desse for, faz cada volta(iteração) seja impressa.
}