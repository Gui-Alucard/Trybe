const connection = require('./connections');

const getBooksById = async (id) => {
  const [ books ] = await connection.execute(
    'SELECT GROUP_CONCAT(" ", title) AS Books FROM books WHERE author_id =?',
    [id]
  );
  if (books.length === 0) return null;
  console.log(books);
  return books;
}

const getAll = async () => {
  const [ books ] = await connection.execute('SELECT id, title, author_id FROM books');
  return books;
};

module.exports = {
  getAll,
  getBooksById,
};

/*
Ainda usando a tabela books como referência crie uma rota books do tipo POST .
Faça as seguintes validações:
 - Título não pode ser vazio;
 - Título precisa ter pelo menos três caracteres;
 - O campo author_id não pode ser vazio;
 - O campo author_id só é válido se existir um autor com esse id;

Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato
{ message: 'Dados inválidos' } com status 400 .
Caso contrário, insira o livro na tabela books e retorne o json
{ message: 'Livro criado com sucesso! '} com o status 200 .
*/