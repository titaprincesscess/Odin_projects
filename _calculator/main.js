// Function to perform the calculation based on operator and operands
const RESULT = document.querySelector(".result");
const FUNCTION = document.querySelector(".function");
const FUNCTIONS = document.querySelectorAll(".functions div");
const NUMBUTTONS = document.querySelectorAll('.buttons div');
const EQUALS = document.querySelector(".equals");
var num1=""; 
var num2="";
var operator="";
var result="";

EQUALS.addEventListener('click', ()=>{
  prompt("hello");
});

//inputing numbers 
NUMBUTTONS.forEach((button) =>{
  button.addEventListener('click', ()=>{
  if(button.textContent .match(/[0-9]+/)){

    if(operator==""){//num1
      num1+=button.innerText;
      RESULT.innerHTML +=button.textContent ;}
    else if(num1!="" && operator!=""){//num2
      if(RESULT.innerHTML!=""){RESULT.innerHTML="";}
        RESULT.innerHTML+= button.textContent;
        num2+=button.innerHTML; }
   
    }
   
  });
});

FUNCTIONS.forEach((button)=>{
  button.addEventListener('click', ()=>{
  if(num1!=""){
    if (button.textContent == "-"){
      operator=button.innerText;
      RESULT.innerHTML="";
    FUNCTION.innerHTML = "SUBTRACTION";}
    else if (button.textContent =="*"){
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = "MULTIPLICATION";}
    else if(button.textContent =="+"){
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = "ADDITION";}
    else if(button.textContent =="/"){
      if(num2===0){
        prompt("number should be greater than 0");
      }
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = "DIVISION";}
    }
    if(num1!=""&&num2!=""&&operator!=""){//operator bug; 
        if (button.textContent == "-"){
          operator=button.textContent;
          result=parseFloat(num1)-parseFloat(num2);
          RESULT.innerHTML = result;
        FUNCTION.innerHTML = "SUBTRACTION";}
        else if (button.textContent =="*"){
          operator=button.textContent;
          result=parseFloat(num1)*parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "MULTIPLICATION";}
        else if(button.textContent =="+"){
          operator=button.textContent;
          result=parseFloat(num1)+parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "ADDITION";}
        else if(button.textContent =="/"){
          operator=button.textContent;
          result=parseFloat(num1)/parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "DIVISION";}
      }

      if(result==RESULT.innerHTML&&num1!=""&&num2!=""&&operator!=""){
        num1=result;
        num2="";
        result="";
      }

  })
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
