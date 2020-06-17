const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Retorne o nome do livro de menor nome. use forEach
function smallerName() {
  let nameBook = 'Algum texto grande para comparar';
  // escreva aqui o seu código
  books.forEach( (bookObj) => {
    if (bookObj.name.length < nameBook.length) {
      nameBook = bookObj.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
assert.equal(smallerName(), 'Duna');

/*
Aqui o correto seria escrever do seguinte jeito: adicionando um paramêtro indice no forEach
para garantir que a nameBook 'n' fique vazia e possa ser comparada sem mexer com sua declaraçao inicial (vazia).
function smallerName() {
  let nameBook;
  books.forEach((book, i) => {
    const {length} = book.name;  // {length} não sei o que é isso!
    if(i === 0) nameBook = book.name;
    else if(length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}
*/