const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListElement = document.querySelector("#ingredients");

function createItem(item) {
  const itemElement = document.createElement("li");

  itemElement.textContent = item;
  itemElement.classList.add("item");

  return itemElement;
}

let ingredientsElements = ingredients.map(createItem);

// console.log("🚀 ~ ingredientsElements:", ingredientsElements);

ingredientsListElement.append(...ingredientsElements);
