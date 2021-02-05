const inquirer = require('inquirer');

const isNumber = (value) => (/\d/.test(value)) ? true : 'Digite apenas números';

const questions = [
  {
    type: 'number',
    name: 'numb1',
    message: 'Digite o 1º número: ',
    default: function () {
      return '';
    },
    validate: isNumber,
  },
  {
    type: 'number',
    name: 'numb2',
    message: 'Digite o 2º número: ',
    default: function () {
      return '';
    },
    validate: isNumber,
  },
  {
    type: 'number',
    name: 'numb3',
    message: 'Digite o 3º número: ',
    default: function () {
      return '';
    },
    validate: isNumber,
  },
];

async function sumMult() {
  const answers = await inquirer.prompt(questions);
  const prometida = (a, b, c) => {
    const result = (a + b) * c;
    if (result < 50) {
      console.log('Valor muito baixo');
      return sumMult();
    }
    return console.log(result);
  }
  return prometida(answers.numb1, answers.numb2, answers.numb3);
}

sumMult().catch(e => console.log(e));