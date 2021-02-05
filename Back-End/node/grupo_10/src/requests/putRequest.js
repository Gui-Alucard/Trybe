const recipes = require('./recipes');

module.exports = {
  async handleIngredient(req, res, next) {
    const recipeId = +req.params.id
    if (recipeId !== 12345 && recipeId !== 12346) return next({message: 'recipe not found', statusCode: 404});
    const { ingredient, action } = req.body;
    const result = recipes.find(recipe => recipe.id === recipeId).ingredientes;

    if (action === "remove") {
      const alterado = result.filter(item => item !== ingredient);
      res.send(alterado);
    } else if (action === "insert") {
      const alterado = result.concat(ingredient);
      res.status(200).send(alterado);
    }
  }
}