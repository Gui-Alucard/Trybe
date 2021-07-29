const User = require('../models/user');
const createToken = require('../auth/createToken');

module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const token = createToken(user);

  return res.status(200).json({ message: 'Login efetuado com sucesso', token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};