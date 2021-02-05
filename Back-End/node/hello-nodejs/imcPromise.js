var inquirer = require('inquirer');
const { bmi, questions } = require('./functions');

function imc() {
  inquirer.prompt(questions).then(answers => {
    const bmiResult = bmi(answers.peso, answers.altura);

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
    } else if (bmiResult <= 85.0) {
      return console.log("Obesidade graus III e IV");
    } else if (bmiResult > 85.0 || bmiResult < 4.0) {
      throw new Error();
    }
  }).catch(error => {
    if(error) {
      console.log("Infelizmente você não está vivo como Ser-humano HAHAHAHA!")
    } else {
      // Something else when wrong
    }
  })
}

imc();