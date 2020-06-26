// _____________ Array Random Numbers _____________

const randNum = () => Math.floor(Math.random() * 51) ** 2; // gera um random num de 0 a 50 e eleva a 2
const arrTen = [];
while (arrTen.length < 10) {
  arrTen.push(randNum());
}
console.log(arrTen);

// _____________ API & Method _____________
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

// _____________ DOM _____________

const sendToHtml = (joke) => {
  let parag = document.querySelector("h2");
  parag.innerHTML = joke;
}

// _____________ Promise + Callbacks _____________

const fetchJoke = () => {
  // console.logs
  function onSuccess () {
    console.log('Success!')
  }
  function onError () {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
  // HOF reduce
  const reducer = (accumulator, currentValue) => accumulator + currentValue; // ou (a, b) => a + b;
  // promise
  const promise = new Promise((resolve, reject) => {
    if (arrTen.reduce(reducer) < 8000) {
      fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => sendToHtml(data.joke));
      fetch(API_URL, myObject);
      sendToHtml(fetch(API_URL, myObject))
      resolve()
    }
    reject()
  })
  promise.then(onSuccess)
  promise.catch(onError)
};

window.onload = () => fetchJoke();
        