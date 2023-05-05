/* script */
const NUMBERBUTTONS = document.querySelectorAll(".number"); //
const OPERATORBUTTONS = document.querySelectorAll(".operator");
const CLEAR = document.querySelector(".equal-clear div:nth-child(2)");
const EQUAL = document.querySelector(".equal-clear div:last-child");
const VIEW = document.querySelectorAll(".view-container div"); //
const OPTVIEW = document.querySelector(".operations"); //
let key;
let addition, subtraction, division, multiplication;
let arrayContainer = [];

window.addEventListener("keydown", buttonKeyPress); //
OPERATORBUTTONS.forEach((button) =>
  button.addEventListener("keydown", clearScreen)
); //
CLEAR.addEventListener("click", clearScreen); //
EQUAL.addEventListener("keydown", clearScreen); //todo

function clearScreen() {
  for (let div of VIEW) {
    div.innerHTML = "";
  }
}
function buttonKeyPress(e) {
  const number = document.querySelector(`div[data-key="${e.key}"]`);
  key = e.keyCode;
  OPTVIEW.innerHTML += String.fromCharCode(key);
}
NUMBERBUTTONS.forEach((number) => {
  number.addEventListener("click", () => {
    key = number.dataset.key;
    OPTVIEW.innerHTML += String.fromCharCode(key);
  });
});
OPERATORBUTTONS.forEach((opt) => {
  opt.addEventListener("click", () => {
    key = opt.dataset.opt;
    OPTVIEW.innerHTML += opt.innerHTML;
  });
});
function doMathematicalOperations(arrayContainer) {
  addition = arrayContainer.map((n) => n + n);
}
