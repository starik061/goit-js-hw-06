function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onChangeBodyColor);
