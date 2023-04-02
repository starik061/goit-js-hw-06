const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createItem(item) {
  const itemElement = document.createElement("li");
  itemElement.textContent = item;
  itemElement.textContent;
  itemElement.classList.add("item");
  return itemElement;
}

let ingredientsElements = ingredients.map(createItem);
console.log("🚀 ~ ingredientsElements:", ingredientsElements);

const ingredientsListElement = document.querySelector("#ingredients");
ingredientsListElement.append(...ingredientsElements);
