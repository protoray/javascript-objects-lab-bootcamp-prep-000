var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var newRecipe = object.assign({}, object);
  newRecipe[`${key}`] = value;
  return newRecipe;
  
}