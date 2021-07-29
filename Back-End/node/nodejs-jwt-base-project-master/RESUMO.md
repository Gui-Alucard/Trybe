### Instalar jsonwebtoken

`npm i jsonwebtoken`

### Arquivo `auth/createToken.js`

```js
const jwt = require('jsonwebtoken');

const secret = 'changeme123';

module.exports = (payload) => {
  const headers = {
    algorithm: 'HS256',
    expiresIn: '7d'
  }

  return jwt.sign(payload, secret, headers);
}
```

### Arquivo `auth/validateToken.js`

```js
const jwt = require('jsonwebtoken');

const secret = 'changeme123';

module.exports = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}
```

### Arquivo `middlewares/verfifyAuthorization.js`

```js
const validateToken = require('../auth/validateToken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const payload = validateToken(authorization);

  if (!payload) return res.status(200).json({ message: "Não autorizado!"});

  next();
}
```

### Aplicar como middleware onde precisar

```js
// ...
app.get('/api/posts', verifyAuthorization, getPosts);
// ...
```

### Arquivo controllers/login.js

```js
const User = require('../models/user');
const createToken = require('../auth/createToken');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body; 

    if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    // tiramos a senha para não deixar ela no payload
    const { password: passwordDB, ...userWithoutPassword } = await User.findUser(username);

    if (!userWithoutPassword || passwordDB !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    const token = createToken(userWithoutPassword);

    return res.status(200).json({ message: 'Login efetuado com sucesso', token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
```