//Faça um programa que defina três variáveis com os valores dos três ângulos
//internos de um triângulo. Retorne true se os ângulos representarem os ângulos
//de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
let a = 45;
let b = 60;
let c = 75;

if (a + b + c > 180 || a + b + c < 180) {
  at = false;
} else if (a + b + c == 180) {
  at = true;
}
 else {
  at = "Mensagem de erro";
}
console.log(at);