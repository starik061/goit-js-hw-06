const formElement = document.querySelector(".login-form");
const emailElement = document.querySelector("input[type='email']");
const passwordElement = document.querySelector("input[type='password']");
let formData = {};

formElement.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!emailElement.value || !passwordElement.value) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  formData = {
    [formElement.elements[0].name]: formElement.elements[0].value,
    [formElement.elements[1].name]: formElement.elements[1].value,
  };

  console.log(formData);

  formElement.reset();
}
