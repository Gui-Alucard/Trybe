const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo2.txt', text);
}

writingFiles();