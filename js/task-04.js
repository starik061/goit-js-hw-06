const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const valueElement = document.querySelector("#value");

let counter = {
  counterValue: 0,

  increment() {
    this.counterValue += 1;
    valueElement.textContent = this.counterValue;
  },

  decrement() {
    this.counterValue -= 1;
    valueElement.textContent = this.counterValue;
  },
};

incrementBtn.addEventListener("click", counter.increment.bind(counter));
decrementBtn.addEventListener("click", counter.decrement.bind(counter));
