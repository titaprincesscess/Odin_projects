// Function to perform the calculation based on operator and operands
function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

// Function to read user input and perform calculation
function performCalculation() {
  var operator = prompt("Enter an operator (+, -, *, /):");
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));

  var result = calculate(operator, num1, num2);

  alert("Result: " + result);
}

// Call the function to start the calculator
performCalculation();
