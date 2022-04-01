let calcDisplay = document.getElementById("display");
let a, b;

const operate = (a, b, operator) => {
  return {
    "+": a + b,
    "-": a - b,
    "/": a / b,
    "*": a * b,
  }[operator];
};
