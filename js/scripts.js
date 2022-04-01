let numbers = document.getElementById("numbers");
let numberButtons = document.getElementsByClassName("btn-number");
let operatorButtons = document.getElementsByClassName("btn-operator");

function getFirstNumber() {
  [...numberButtons].forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.innerText.length < 8) {
        numbers.innerText += button.innerText;
        console.log(numbers.innerText.length);
      }
    });
  });
  return numbers.innerText;
}

function OPERATE(a, b, operator) {
  return {
    "+": a + b,
    "-": a - b,
    "/": a / b,
    "*": a * b,
    "%": a % b,
  }[operator];
}

getFirstNumber();
