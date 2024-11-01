// simple promise
const getIngredient = async (name) => {
  // walk to kitchen delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // return ingredient
  return Promise.resolve(name);
};
