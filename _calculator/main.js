// Function to perform the calculation based on operator and operands
const RESULT = document.querySelector(".result");
const FUNCTION = document.querySelector(".function");
const EQUALS = document.querySelector(".equals");
const BUTTONS = document.querySelectorAll('.buttons div');
var reg = /[0-9]/;
EQUALS.addEventListener('click', ()=>{
  prompt("hello");
});

BUTTONS.forEach((button) =>{
  button.addEventListener('click', ()=>{

    if (button.textContent == "-"){
    FUNCTION.innerHTML = "SUBTRACTION";}
    else if (button.textContent =="*"){
      FUNCTION.innerHTML = "MULTIPLICATION";}
    else if(button.textContent =="+"){
      FUNCTION.innerHTML = "ADDITION";}
    else if(button.textContent =="/"){
      FUNCTION.innerHTML = "DIVISION";}
    else if(button.textContent == reg){
      RESULT.innerHTML = button.textContent ;}


  });
});

function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      FUNCTION.innerHTML = "ADDITION";
      return num1 + num2;
    case "-":
      FUNCTION.innerHTML = "SUBTRACTION";
      return num1 - num2;
    case "*":
      FUNCTION.innerHTML = "MULTIPLICATION";
      return num1 * num2;
    case "/":
      FUNCTION.innerHTML = "DIVISION";
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

//Function to read user input and perform calculation
function performCalculation() {
  var operator = prompt("Enter an operator (+, -, *, /):");
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));

  var result = calculate(operator, num1, num2);

  alert("Result: " + result);
}

//Call the function to start the calculator
performCalculation();
