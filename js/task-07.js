const inputElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

inputElement.addEventListener("input", onChangeFontSize);

function onChangeFontSize() {
  //   console.dir(inputElement.value);
  spanElement.style.fontSize = inputElement.value + "px";
}
