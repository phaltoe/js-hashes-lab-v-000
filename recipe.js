'use strict';

function addIngredient(recipeObject, ingredientName, amountOfIngredient) {
  recipeObject[ingredientName] = amountOfIngredient;
  return recipeObject;
}

function removeIngredient(recipeObject, ingredientName) {
  delete recipeObject[ingredientName];
  return recipeObject;
}

function updateIngredient(recipeObject, ingredientName, amountOfIngredient) {
  recipeObject[ingredientName] = amountOfIngredient;
  return recipeObject;
}

function readRecipe(recipeObject) {
  for (var key in recipeObject) {
    console.log("this recipe calls for " + recipeObject[key] + " of " + key); 
  }
}