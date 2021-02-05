const recipes = require('../requests/recipes');

module.exports = {
  async getRecipes(_req, res) {
    res.send(recipes);
  },

  async getRecipeId(req, res) {
    const recipeId = +req.params.id
    const result = recipes.find(recipe => recipe.id === recipeId);
    res.send(result);
  },

  async getIngredients(req, res) {
    const recipeId = +req.params.id
    const ingredients = recipes.find(recipe => recipe.id === recipeId).ingredientes;
    res.send(ingredients);
  }
}