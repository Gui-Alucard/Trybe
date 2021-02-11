const connection = require('./connections');

const getAll = async () => {
  const [ users ] = await connection.execute('SELECT * FROM users');
  return users;
}

const getById = async (id) => {
  const [ [user] ] = await connection.execute(
    'SELECT * FROM users WHERE id =?;',
    [id]
  );
  if (!user) return null;
  console.log(user);
  return user;
}

const isValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;
  return true;
};

const insertUser = async (first_name, last_name, email, password) => {
  await connection.execute(
    'INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?);',
    [first_name, last_name, email, password]
  );
};

const editUser = async (first_name, last_name, email, password, id) => {
  await connection.execute(
    'UPDATE users SET first_name =?, last_name =?, email =?, password =? WHERE id =?;',
    [first_name, last_name, email, password, id]
  );
};

const delUser = async (id) => {
  await connection.execute(
    'DELETE FROM users WHERE id =?',
    [id]
  );
};

module.exports = {
  insertUser,
  editUser,
  isValid,
  getById,
  delUser,
  getAll,
};
