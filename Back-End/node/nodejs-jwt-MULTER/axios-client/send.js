const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

/* Aqui adicionamos uma propriedade chamada 'file' onde carregará nosso arquivo */
const form = new FormData();
form.append('file', stream);

/* Esse arquivo não será enviado  no body da requisição como de costume,
   dessa vez iremos utilizar o header para  enviar essa informação. */
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/upload/single', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    const { file } = response.data;
    console.log("arquivo foi feito upload com o nome", file.filename)
  })
  .catch((error) => console.error(error));