createHeaderPanel();
createDivBoxes(16);



function createHeaderPanel(){
    let labels = ['Reset','New Sketch', 'Size',' button'];
    for(let label of labels){
    const buttons = document.createElement('button');
    document.body.appendChild(buttons);
    buttons.textContent = label;
    buttons.classList.add('button');};
};

function createDivBoxes(num){ 
    for(let counter = 0; counter <num; counter++ ){//Parent
     const outerDivContainer = document.createElement('div');

        for (let count = 0; count < num; count++) { //child 
            const innerDivContainer = document.createElement('div');
            outerDivContainer.appendChild(innerDivContainer);
           innerDivContainer.classList.add('divSize');
            };
        document.body.appendChild(outerDivContainer);
        outerDivContainer.classList.add('divContainer');
    };
}; 