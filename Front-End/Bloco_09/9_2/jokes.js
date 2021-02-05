// _____________ Array Random Numbers _____________
const randNum = () => Math.floor(Math.random() * 51) ** 2; // gera um random num de 0 a 50 e eleva a 2
let arrTen = [];
const newArray = () => {
  while (arrTen.length < 10) {
    arrTen.push(randNum());
  }
}
newArray();

// _____________ API & Method _____________

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

// _____________ DOM _____________

const sendToHtml = (joke) => { // o param podia ser batatinha kk
  let parag = document.querySelector("h2");
  parag.innerHTML = joke;
}

// _____________ Promise + Callbacks _____________

function onError () {
  sendToHtml('Clique em recarregar!')
}

const fetchJoke = () => {
  // HOF reduce
  const reducer = (accumulator, currentValue) => accumulator + currentValue; // ou (a, b) => a + b;
  // promise
  const promise = new Promise((resolve, reject) => {
    if (arrTen.reduce(reducer, 0) < 8000) {
      fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => sendToHtml(data.joke));
        console.log(arrTen);
      resolve()
    }
    reject()
  })
  promise.then(fetch(API_URL, myObject))
  promise.catch(onError)
};

const btnReload = document.getElementById("btn");

const reSend = (callback) => {
  const newNumb = new Promise((resolve, reject) => {
    if (callback) {
      resolve()
    }
      reject()
      console.log('falhou!');
    })
  newNumb.then(fetchJoke())
  newNumb.catch(onError)
};

window.onload = () => {
  fetchJoke();
};

btnReload.addEventListener('click', () => reSend(newArray));