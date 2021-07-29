const express = require('express')
const multer = require('multer');

const app = express()
const port = 3000

const upload = multer({dest: 'uploads'});

// upload simples
app.post('/files/upload1', upload.single('file'), (req, res) => {
  const { body, file } = req;

  res.status(200).json({ body, file });
});

// upload vários
app.post('/files/upload2', upload.any('file'), (req, res) => {
  const { body, files } = req;

  res.status(200).json({ body, files });
});

// upload array
app.post('/files/upload3', upload.array('file'), (req, res) => {
  const { body, files } = req;

  res.status(200).json({ body, files });
});

// upload fields
app.post('/files/upload4', 
  upload.fields([{ name: 'milho', maxCount: 1}, { name: 'batata', maxCount: 1}]),
  (req, res) => {
    const { body, files } = req;

    res.status(200).json({ body, files });
  });

// sem upload
app.post('/files/upload5', 
  upload.none(),
  (req, res) => {
    const { body, files } = req;

    res.status(200).json({ body, files });
  });

app.use((err, req, res, next) => res.status(500).json({err}))

app.listen(port, () => console.log(`Example app listening on port port!`))