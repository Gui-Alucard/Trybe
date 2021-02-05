const readline = require('readline-sync');

console.log("Entry Point criado juntamente com o pacote");

const nome = readline.question('Digite seu nome: ');
const sobrenome = readline.question('Digite seu sobrenome: ');

console.log('Olá, %s %s', nome, sobrenome); // %s substitui o valor da variavel