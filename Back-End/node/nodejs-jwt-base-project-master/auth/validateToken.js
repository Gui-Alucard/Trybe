const jwt = require('jsonwebtoken');

const secret = 'qualeasenha?';

const validateToken = (token) => { // authorization: token
  try {
    return jwt.verify(token, secret);
  } catch (_error) {
    return null;
  }
};

module.exports = validateToken;