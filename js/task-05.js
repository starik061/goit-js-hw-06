const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", onChangeName);

function onChangeName() {
  outputElement.textContent = inputElement.value
    ? inputElement.value
    : "Anonymous";
}
