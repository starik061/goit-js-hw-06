function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorInfoSpan.textContent = document.body.style.backgroundColor;
}

const changeColorBtn = document.querySelector(".change-color");
const colorInfoSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeBodyColor);
