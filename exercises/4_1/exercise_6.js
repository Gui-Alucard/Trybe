//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
//quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

//Exemplo: bishop -> diagonals
let pecaXadres = "Rainha"
pecaXadres = pecaXadres.toLowerCase()
if (pecaXadres == "peão") {
  console.log("Uma casa à frente.");
} else if (pecaXadres == "torre") {
  console.log("Movimento vertical ou horizontal.");
} else if (pecaXadres == "cavalo") {
  console.log("Movimento em L, 2 casa e uma lateralmente.");
} else if (pecaXadres == "bispo") {
  console.log("Movimento diagonal.");
} else if (pecaXadres == "rainha") {
  console.log("combinação dos movimentos do Bispo + Torre -> Diagonal ou horizontal ou vertical.");
} else if (pecaXadres == "rei") {
  console.log("Uma casa sentido vertical ou horizontal.");
} else {
  console.log("Mensagem de erro.");
}