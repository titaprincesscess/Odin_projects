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
//var operand="";
var result="";
//inputing numbers 
NUMBUTTONS.forEach((button) =>{
  button.addEventListener('click', ()=>{
  if(button.textContent .match(/[0-9]+/)){
    
    if(num2==""&&operator==""){//num1
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
    FUNCTION.innerHTML = operator;}
    else if (button.textContent =="*"){
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = operator;}
    else if(button.textContent =="+"){
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = operator;}
    else if(button.textContent =="/"){
      if(num2===0){
        prompt("number should be greater than 0");
      }
      operator=button.innerText;
      RESULT.innerHTML="";
      FUNCTION.innerHTML = operator;}
    }
    if(num1!=""&&num2!=""&&operator!=""){
       operatorValue();
      }

      if(result==RESULT.innerHTML&&num1!=""&&num2!=""&&operator!=""){
        num1=result;
        num2="";
        result="";
        if(operator!=button.textContent){ //delay change of operand value
          operator=button.textContent;
          FUNCTION.innerText=button.innerText; }
      }

  })
});

EQUALS.addEventListener('click', ()=>{
  if(num1!=""&&num2!=""){
  operatorValue();
}
});
CLEAR.addEventListener('click',()=>{
        num1="";
        num2="";
        result="";
        operator="";
        operand="";
        FUNCTION.innerHTML ="";
        RESULT.innerHTML ="";
});

function operatorValue() {
  if(operator=="+"){
    result=parseFloat(num1)+parseFloat(num2);
        RESULT.innerHTML = result;
        FUNCTION.innerHTML = operator;}
  else if(operator=="-"){
    result=parseFloat(num1)-parseFloat(num2);
        RESULT.innerHTML = result;
        FUNCTION.innerHTML = operator;}
  else if(operator=="*"){
    result=parseFloat(num1)*parseFloat(num2);
        RESULT.innerHTML = result;
        FUNCTION.innerHTML = operator;}
  else if(operator =="/"){
    result=parseFloat(num1)/parseFloat(num2);
    RESULT.innerHTML = result;
    FUNCTION.innerHTML = operator;}
}