// Function to perform the calculation based on operator and operands
const RESULT = document.querySelector(".result");
const FUNCTION = document.querySelector(".function");
const FUNCTIONS = document.querySelectorAll(".functions div");
const NUMBUTTONS = document.querySelectorAll('.buttons div');
const EQUALS = document.querySelector(".equals");
const CLEAR = document.querySelector(".clear");
var num1=""; 
var num2="";
var operator="";
var operand="";
var result="";
//inputing numbers 
NUMBUTTONS.forEach((button) =>{
  button.addEventListener('click', ()=>{
  if(button.textContent .match(/[0-9]+/)){
    
    if(operator==""){//num1
      num1+=button.textContent;
      RESULT.innerHTML +=button.textContent ;}
    if(num1!=""&& operator!=""&&num2==""){//num2 
      if(RESULT.textContent!=""){RESULT.textContent=" ";}
      num2+=button.textContent;
      RESULT.innerHTML+= button.textContent;
        }else if(num1!=""&& operator!=""&&num2!=""){
          num2+=button.textContent;
      RESULT.innerHTML+= button.textContent;
        }
      }
  });
});

FUNCTIONS.forEach((button)=>{
  button.addEventListener('click', ()=>{
  if(num1!=""&&num2==""&&operator==""){  //initial value of operator, initial operator's value only if after num1 has its value
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
    if(num1!=""&&num2!=""&&operator!=""){//operator bug; operator does not retain the  first value
        if (operator == "-"){
         // operator=button.textContent;
          result=parseFloat(num1)-parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "SUBTRACTION";}
        else if (operator =="*"){
          //operator=button.textContent;
          result=parseFloat(num1)*parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "MULTIPLICATION";}
        else if(operator =="+"){
          //operator=button.textContent;
          result=parseFloat(num1)+parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "ADDITION";}
        else if(operator =="/"){
          //operator=button.textContent;
          result=parseFloat(num1)/parseFloat(num2);
          RESULT.innerHTML = result;
          FUNCTION.innerHTML = "DIVISION";}
      }
    //   if(num1!=""&&operand==""){//operand bug
    //     if (button.textContent == "-"){
    //       operand=button.textContent;
    //       result=parseFloat(num1)-parseFloat(num2);
    //       RESULT.innerHTML = result;
    //     FUNCTION.innerHTML = "SUBTRACTION";}
    //     else if (button.textContent =="*"){
    //       operand=button.textContent;
    //       result=parseFloat(num1)*parseFloat(num2);
    //       RESULT.innerHTML = result;
    //       FUNCTION.innerHTML = "MULTIPLICATION";}
    //     else if(button.textContent =="+"){
    //       operand=button.textContent;
    //       result=parseFloat(num1)+parseFloat(num2);
    //       RESULT.innerHTML = result;
    //       FUNCTION.innerHTML = "ADDITION";}
    //     else if(button.textContent =="/"){
    //       operand=button.textContent;
    //       result=parseFloat(num1)/parseFloat(num2);
    //       RESULT.innerHTML = result;
    //       FUNCTION.innerHTML = "DIVISION";}
      // }

      if(result==RESULT.innerHTML&&num1!=""&&num2!=""&&operator!=""){
        num1=result;
        num2="";
        result="";
      }

  })
});

EQUALS.addEventListener('click', ()=>{
  prompt("hello");
});
CLEAR.addEventListener('click',()=>{
        num1="";
        num2="";
        result="";
        operator="";
        operand="";
        FUNCTION.innerHTML ="";
        RESULT.innerHTML ="";
})



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
