const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

// Toda API de módulos nativos do NodeJS utiliza esse mesmo formato de callbacks

// const fs = require('fs');

// Callbacks desse tipo são chamadas de node-style callbacks e são, por convenção,
// a melhor maneira de se estruturar uma callback.

// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });