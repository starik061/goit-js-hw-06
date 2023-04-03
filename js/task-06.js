const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", onCheckValidValue);

function onCheckValidValue() {
  console.dir(inputElement);
  if (inputElement.dataset.length == inputElement.value.length) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}
