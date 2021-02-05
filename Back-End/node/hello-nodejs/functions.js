function calculaDelta(a, b, c) {
  return (Math.pow(b, 2)) -4 * a * c;
}

function calculaX(a, b, delta) {
  const x1 = (b * -1 + Math.sqrt(delta)) / 2 * a;
  const x2 = (b * -1 + Math.sqrt(delta)) / 2 * a;
  return { x1, x2 };
}

function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  return bmiResult.toFixed(2);
}

const isNumber = (value) => (/\d/.test(value)) ? true : 'Por favor insira um número válido!';

const questions = [
  {
    type: 'number',
    name: 'peso',
    message: 'Digite seu peso: ',
    default: function () {
      return '';
    },
    validate: isNumber,
  },
  {
    type: 'number',
    name: 'altura',
    message: 'Digite sua altura: ',
    default: function () {
      return '';
    },
    validate: isNumber,
  }
];

module.exports = {
  calculaDelta,
  calculaX,
  bmi,
  questions
};