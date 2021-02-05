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

function sumMult() {
  inquirer.prompt(questions).then(answers => {
    const numb1 = answers.numb1;
    const numb2 = answers.numb2;
    const numb3 = answers.numb3;
    return new Promise((resolve, reject) => {
      const result = (numb1 + numb2) * numb3;
      if (result < 50) return reject('Valor muito baixo');

      resolve(console.log(result));
    });
  }).catch(error => {
    if (error) {
      console.log(error);
    }
  })
}

sumMult();