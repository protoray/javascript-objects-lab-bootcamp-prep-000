var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var newRecipe = object.assign({}, object, key: `${value}`);
  
  return object;
  
}