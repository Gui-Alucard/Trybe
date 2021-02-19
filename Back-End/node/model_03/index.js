const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const SongController = require('./controllers/SongController');

app.get('/songs', SongController.getAll);

app.get('/songs/:id', SongController.findById);

app.post('/songs', SongController.create);

app.listen(port, () => console.log(`Example app listening on port port!`))