const parentDivElement = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divNumberInput = document.querySelector("[type='number']");

let divWidth = 30;
let divHeight = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  let amount = parseInt(divNumberInput.value);
  let divArray = [];

  for (let i = 1; i <= amount; i += 1) {
    let divElement = document.createElement("div");
    divElement.style.width = divWidth + "px";
    divElement.style.height = divHeight + "px";
    divElement.style.backgroundColor = getRandomHexColor();

    divArray.push(divElement);

    divWidth += 10;
    divHeight += 10;
  }

  parentDivElement.append(...divArray);
}

function destroyBoxes() {
  parentDivElement.innerHTML = "";
  divNumberInput.value = "";
  divWidth = 30;
  divHeight = 30;
}

function enterBtnListener(event) {
  if (event.key === "Enter") {
    createBoxes();
  }
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
window.addEventListener("keydown", enterBtnListener);
