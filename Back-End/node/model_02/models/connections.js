const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'qualeasenha7822',
  host: 'localhost',
  database: 'users_crud'
});

module.exports = connection;
