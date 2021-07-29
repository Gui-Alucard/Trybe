const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, "./uploads");
  },
  filename: (_req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
app.use(express.static(__dirname + "/uploads"));

app.get('/ping', (_req, res) => res.send('pong!'));
app.post('/file/upload', upload.single('file'), (_req, res) => {
  res.send('Upload realizado com sucesso!').status(200);
});

// O parâmetro passado na chamada de upload.single('este')
// indica o nome do input do formulário enviado que conterá o arquivo.
// No caso desse exemplo, o nome é file,
// mas poderia ter outro nome em outros formulários.

module.exports = app;