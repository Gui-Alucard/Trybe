// 3- Agora inverta o lado do triângulo.
// Atenção! Note que esse exercício é bem mais complexo que o anterior!
// Não basta, aqui, imprimir somente asteriscos. 
// Você precisará de uma lógica para imprimir espaços também.
/*
 n = 5

    *
   **
  ***
 ****
*****
*/
/*
INTERPRETAÇÃO : fazer um loop que começa com n-1 espaços e add 1 "*" ao fim por 5 vezes.
ALGORÍTIMO :
1º - um "for" que repita 5 vezes o valor de n-1.
2º - um "for" que repita 5 vezes e as imprima add o 1º "for" + 1 "*".
*/
let n = 5; // transformar 5 em string = "*"
let triangulo = 0; // PORQUÊ " 0 " e não "" ????????????????????

for (let space = n; space >= 0; space = space - 1) {
  let loop1 = " ".repeat(space);
  let loop2 = "*".repeat(triangulo);
  triangulo += 1;
     console.log(loop1+loop2);
}
