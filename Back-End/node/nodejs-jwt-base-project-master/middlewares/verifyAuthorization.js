const validateToken = require('../auth/validateToken');

const verifyAuthorization = (req, res, next) => {
  const { authorization: token } = req.headers;
  const payload = validateToken(token);
  if (!payload) return res.status(500).json({ message: 'Não autorizado!' }); // ! == null
  next();
}

module.exports = verifyAuthorization;