let container = document.querySelector(".divContainer");
let content = document.querySelector(".content");
let parentDivContainer;
let childDivContainer;
let button;
let num = 0;
let selectedCanvasColor = "#DFDC2E";
let colorPicker;

for (let counter = 0; counter < 1; counter++) {
  //Parent
  buttonParentDiv = document.createElement("div");
  //buttons at the top of the screen
  let buttonLabel = [
    "Reset",
    "26x26", //16x16
    "38x38", //32x32
    "44x44", //48x48
    "70x70", //64x64            80x80
    "Start",
    "Color",
  ];
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
const color = document.querySelector("#Color");
colorPicker = document.createElement("input");
color.appendChild(colorPicker);
colorPicker.classList.add("input");
colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("id", "colorPicker");
colorPicker.setAttribute("value", "#FCB82C");

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id == "Reset") {
      resetCanvas();
      makeWelcomeScreen();
    } else if (button.id == "26x26") {
      if (content) {
        container.remove();
      }
      num = 26;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "38x38") {
      if (content) {
        container.remove();
      }
      num = 38;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "44x44") {
      if (content) {
        container.remove();
      }
      num = 44;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "70x70") {
      if (content) {
        container.remove();
      }
      num = 70;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "Start") {
      const div = document.querySelector(".divSize");
      if (!div) {
        alert("You cannot draw without a canvas.");
      } else {
        startDrawing();
      }
    } else if (button.id == "color") {
      //color picker
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
      //div boxes
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
  const colorPicker = document.querySelector("#colorPicker");
  const box = document.querySelectorAll(".divSize"); //
  box.forEach((boxes) =>
    boxes.addEventListener("mouseover", function (event) {
      selectedCanvasColor = colorPicker.value;
      event.target.style.backgroundColor = selectedCanvasColor;
      event.target.dataset.color = selectedCanvasColor;
    })
  );
  box.forEach((boxes) =>
    boxes.addEventListener("click", function (event) {
      colorPicker.click();
    })
  );
}
window.addEventListener("load", makeWelcomeScreen);
function makeWelcomeScreen() {
  let arrayContent = [
    "HOW TO PLAY Etch-A-Sketch (each-a-sketch)",
    "Click on any of the buttons at the top menu between 26x26 to 70x70 to make a canvas.",
    "Click Start to start sketching.",
    'If you want to change color, you can either click the color picker on the upper right corner of the menu that says "Color", or click anywhere on the grid.',
    "To clear the screen, just click the 'Reset' button or any of the canvas' sizes.",
  ];
  container = document.createElement("div");
  document.body.appendChild(container);
  content = document.createElement("div");
  container.appendChild(content);
  container.classList.add("divContainer");
  content.classList.add("content");
  let h1 = document.createElement("h1");
  content.appendChild(h1);
  h1.textContent = arrayContent[0];
  let ul = document.createElement("ul");
  content.appendChild(ul);
  for (let counter = 1; counter < arrayContent.length; counter++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = arrayContent[counter];
  }
}
