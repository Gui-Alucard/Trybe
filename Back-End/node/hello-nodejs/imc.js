const { questionFloat } = require('readline-sync');
const { bmi } = require('./functions');

function imc() {
  const peso = questionFloat('Digite seu peso: ');
  const altura = questionFloat('Digite sua altura: ');
  const bmiResult = bmi(peso, altura);

  console.log(`Seu imc é ${bmiResult}`);

  if (bmiResult < 18.5) {
    return console.log("Abaixo do peso (magreza)");
  } else if (bmiResult <= 25.0) {
    return console.log("Peso normal");
  } else if (bmiResult <= 29.9) {
    return console.log("Acima do peso (sobrepeso)");
  } else if (bmiResult <= 34.9) {
    return console.log("Obesidade grau I");
  } else if (bmiResult <= 39.9) {
    return console.log("Obesidade grau II");
  } else if (bmiResult >= 40.0) {
    return console.log("Obesidade graus III e IV");
  }
}

imc();