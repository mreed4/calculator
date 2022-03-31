let calcDisplay = document.getElementById("display");

const operate = (a, b, operator) => {
  return {
    "+": a + b,
    "-": a - b,
    "/": a / b,
    "*": a * b,
  }[operator];
};
