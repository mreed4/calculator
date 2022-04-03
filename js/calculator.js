let numbers = document.getElementById("numbers");
let numberButtons = document.getElementsByClassName("btn-number");
let operatorButtons = document.getElementsByClassName("btn-operator");
let clear = document.getElementsByClassName("btn-clear")[0];

function getFirstNumber() {
  [...numberButtons].forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.innerText.length < 8) {
        numbers.innerText += button.innerText;
      }
      if (numbers.innerText.length === 8) {
        [...numberButtons].map((button) => {
          button.classList.remove("btn-enabled");
          button.classList.add("btn-disabled");
        });
      }
    });
  });
  return numbers.innerText;
}

function clearScreen() {
  clear.addEventListener("click", () => {
    numbers.innerText = "";
    [...numberButtons].forEach((button) => {
      button.classList.remove("btn-disabled");
      button.classList.add("btn-enabled");
    });
  });
}

function operate(a, b, operator) {
  return {
    "+": a + b,
    "-": a - b,
    "/": a / b,
    "*": a * b,
    "%": a % b,
  }[operator];
}

getFirstNumber();
clearScreen();
