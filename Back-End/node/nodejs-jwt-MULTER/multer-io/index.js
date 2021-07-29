const express = require('express')
const multer = require('multer');
const app = express()
const port = 3000

// const upload = multer({
//   dest: 'uploads'
// });

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

// const storage = multer.memoryStorage();

const upload = multer({ storage });

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/public'));

app.post('/upload/single', upload.single('file'), (req, res) => {
  const { body, file } = req;

  res.status(200).json({ body, file });
});

app.post('/upload/memory', upload.single('file'), (req, res) => {
  const { body, file } = req;

  const { buffer } = file;
  const content = buffer.toString('utf-8')

  res.status(200).json({ body, content });
});

app.post('/upload/any', upload.any('file'), (req, res) => {
  const { body, files } = req;
  
  res.status(200).json({ body, files });
});

app.post('/upload/array', upload.array('avatar'), (req, res) => {
  const { body, files } = req;
  
  res.status(200).json({ body, files });
});

app.post('/upload/none', upload.none(), (req, res) => {
    const { body, files } = req;
    
    res.status(200).json({ body, files });
});

app.post('/upload/fields', 
  upload.fields([{ name: 'frente', maxCount: 1}, { name: 'verso', maxCount: 1}]), 
  (req, res) => {
    const { body, files } = req;
    
    res.status(200).json({ body, files });
});

app.use((err, req, res, next) => res.status(500).json({ err }))

app.listen(port, () => console.log(`Example app listening on port port!`))