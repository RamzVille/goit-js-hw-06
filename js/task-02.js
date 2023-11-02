const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Get the <ul> element by its id and add its items to LI
const emptyUL = document.getElementById("ingredients");

  ingredients.forEach(ingredient => {
  const liofEmptyUL = document.createElement("li");
  liofEmptyUL.textContent = ingredient;
  liofEmptyUL.classList.add("item");
  emptyUL.appendChild(liofEmptyUL);
});