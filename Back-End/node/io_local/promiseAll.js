const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

Promise.all([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt'),
  readFilePromise('file3.txt')
])
.then(([file1, file2, file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
})
.catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
})
