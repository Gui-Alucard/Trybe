const express = require('express');
const app = express();
const port = 3000;
const { getRecipes, getRecipeId, getIngredients } = require('./src/requests/getRequest');
const { handleIngredient } = require('./src/requests/putRequest');
const { idError } = require('./src/requests/middleError');

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));
app.get('/recipe', getRecipes);
app.get('/recipe/:id', getRecipeId);
app.get('/recipe/:id/ingredients', getIngredients);

app.put('/recipe/:id/ingredients', handleIngredient);

app.use(idError);

app.listen(port, () => console.log(`JÁ FOI O DISCO VOADOR`));