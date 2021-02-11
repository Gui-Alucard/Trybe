const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const express = require('express');
const app = express();
const PORT = 3000;

const User = require('./models/User');
app.use(bodyParser.json());

app.get('/user', rescue(async (_req, res) => {
  const users = await User.getAll();
  if (!users) return res.status(404).json({ message: 'Nenhum usuário cadastrado!' });
  return res.status(200).json(users);
}));

app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(200).json(user);
}));

app.post('/user', rescue(async (req, res, _next) => {
  const { first_name, last_name, email, password } = req.body;
  if (!User.isValid(first_name, last_name, email, password)) return res.status(200).json({ message: 'Dados inválidos'});
  await User.insertUser(first_name, last_name, email, password);
  res.status(201).json({ message: 'Usuário criado com sucesso' });
}));

app.put('/user/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  if (!User.isValid(first_name, last_name, email, password)) return res.status(200).json({ message: 'Dados inválidos'});
  await User.editUser(first_name, last_name, email, password, id);
  res.status(200).json({ message: 'Usuário editado com sucesso' });
}));

app.delete('/user/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;
  await User.delUser(id);
  res.status(200).json({ message: 'Usuário deletado com sucesso' });
}));

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(PORT, () => console.log(`O PAI TÁ ON ${PORT} VEZES!`));
