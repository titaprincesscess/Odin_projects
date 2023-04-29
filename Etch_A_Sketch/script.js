//constants
let parentDivContainer;
let childDivContainer;
let button;
let num = 0;

for (let counter = 0; counter < 1; counter++) {
  //Parent
  buttonParentDiv = document.createElement("div");
  //buttons at the top of the screen
  let buttonLabel = ["Reset", "16x16", "32x32", "48x48", "64x64", "Start", " "];
  for (let number = 0; number < buttonLabel.length; number++) {
    button = document.createElement("div");
    buttonParentDiv.appendChild(button);
    button.classList.add("button");
    button.textContent = buttonLabel[number];
    button.setAttribute("id", buttonLabel[number]);
  }
  document.body.appendChild(buttonParentDiv);
  buttonParentDiv.classList.add("buttonParentDiv");
}
const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id == "Reset") {
      resetCanvas();
    } else if (button.id == "16x16") {
      num = 16;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "32x32") {
      num = 32;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "48x48") {
      num = 48;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "64x64") {
      num = 64;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "Start") {
      startDrawing();
    }
  })
);
function createDivBoxes(num) {
  let parentArray = [];
  for (let counter = 0; counter < num; counter++) {
    //Parent
    parentDivContainer = document.createElement("div");
    for (let count = 0; count < num; count++) {
      //child
      childDivContainer = document.createElement("div");
      parentDivContainer.appendChild(childDivContainer);
      childDivContainer.classList.add("divSize");
    } //child
    parentArray.push(counter);
    document.body.appendChild(parentDivContainer);
    parentDivContainer.classList.add("divContainer");
    parentDivContainer.setAttribute("id", parentArray[counter]);
  } //Parent
} //function ends here
function resetCanvas() {
  const divs = document.querySelectorAll(".divContainer");
  divs.forEach((div) => {
    if (div.hasChildNodes) {
      div.outerHTML = "";
    }
  });
}
//clicking the start button will change the divboxes bgcolor when mouse hover over it.
function startDrawing() {
  alert("start drawing");
  const divboxes = document.querySelectorAll(".divSize");
  console.log(divboxes);
  divboxes.forEach((boxes) =>
    boxes.addEventListener("mouseover", () => {
      boxes.classList.add("coloredBackgroundDiv");
    })
  );
}
function colorPicker() {
  divboxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
      //todo
    });
  });
}
