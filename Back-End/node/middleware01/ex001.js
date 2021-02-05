const express = require('express');
// const fs = require('fs').promises;

const app = express();

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.get('/ping', (_req, res) => {
  res.status(200).json('./ex001.json');
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
