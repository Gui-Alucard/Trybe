const fs = require('fs');

const text = 'Texto teste 2';

async function writingFiles() {
  await fs.writeFile('./meu-arquivo2.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles();