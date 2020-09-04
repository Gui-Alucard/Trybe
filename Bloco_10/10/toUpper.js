const mostrador = (word) => { // callback
  console.log(word);
}

const uppercase = (str, callback) => {
  const upper = str.toUpperCase();
  callback(upper);
}

uppercase('guilherme', mostrador);

module.exports = uppercase;