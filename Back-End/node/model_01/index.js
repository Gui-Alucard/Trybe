const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(author);
});
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos'});
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso!' });
});

// __________________________________________________________________________________
app.get('/books', rescue(async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
}));
app.get('/books/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const books = await Book.getBooksById(id);
  if (!books) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
}));

app.use((err, _req, res, _next) => {
  console.log(err.message);

  res.status(500).json({ message: 'Erro interno!'});
});

app.listen(port, () => console.log(`O PAI TÁ ON ${port} VEZES!`));
