// const readline = require('readline-sync');
// const functions = require('./functions');
const { questionInt } = require('readline-sync');
const { calculaDelta, calculaX } = require('./functions');

function calculaBhaskara() {
  const a = questionInt('Digite o valor de a: ');
  const b = questionInt('Digite o valor de b: ');
  const c = questionInt('Digite o valor de c: ');
  const deltaResult = calculaDelta(a, b, c);
  console.log(`Delta: ${deltaResult}`);

  if (deltaResult < 0) {
    console.log("Delta não é positivo. Valor: %s", deltaResult);
    return;
  }
  
  const resultado = calculaX(a, b, deltaResult);
  console.log("Resultado => x1 = %s, x2 = %s", resultado.x1, resultado.x2);
}

calculaBhaskara();