let parentDivContainer;
let childDivContainer;
let button;
let num = 0;
let selectedCanvasColor = "#FFFFFF";
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

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id == "Reset") {
      resetCanvas();
    } else if (button.id == "26x26") {
      num = 26;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "38x38") {
      num = 38;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "44x44") {
      num = 44;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "70x70") {
      num = 70;
      resetCanvas();
      createDivBoxes(num);
    } else if (button.id == "Start") {
      startDrawing();
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
