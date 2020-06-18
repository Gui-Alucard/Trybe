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

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. use some
const expected_result = true

function someBookWasReleaseOnThe80s() {
  return books.some( (release) => {
    if (release.releaseYear >= 1979 && release.releaseYear < 1990) {
      return release;
    }
  })
}

assert.equal(someBookWasReleaseOnThe80s(), expected_result);

/*
Outra forma de fazer

function someBookWasReleaseOnThe80s() {
  const releaseDate = books.some(book => book.releaseYear >= 1979 && book.releaseYear < 1990);
  return releaseDate;
}

Mais uma forma (simples)

function someBookWasReleaseOnThe80s() {
  return books.some(book => {
    return book.releaseYear >= 1979 && book.releaseYear < 1990;
  });
}
*/