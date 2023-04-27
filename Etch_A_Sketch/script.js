//constants
let outerDivContainer ;
let innerDivContainer;
let selectTag;
//buttons at the top of the screen
let labels = ['Reset','New_Sketch', 'Dimention','Start_Game'];
for(let label of labels){//labeling the buttons
    const buttons = document.createElement('button');
    document.body.appendChild(buttons);
    buttons.textContent = label;
    buttons.setAttribute('id',label);
    buttons.classList.add('button');/*button design*/ };

//Grid-dimention select tag
selectTag = document.createElement('select');
    let dimentionSizes = [" ","single","double","triple","quadruple"];
    for(let size in dimentionSizes){
    const dimention = document.createElement('option');
    selectTag.appendChild(dimention);
    dimention.setAttribute('value', dimentionSizes[size]);
    if(dimention.value == dimentionSizes[0]){dimention.textContent="Canvas Size"}
    else{dimention.textContent = dimentionSizes[size];}


    selectTag.addEventListener('change',()=>{//event starts here
    if(dimention.value ===dimentionSizes[1]){ let num = 16;}
    else if(dimention.value ===dimentionSizes[2]){num = 32;}
    else if(dimention.value ===dimentionSizes[3]){num = 48;}
    else if(dimention.value ===dimentionSizes[4]){num = 64;}
    else{num = 80;}//should remove childnode

    for(let counter = 0; counter <num; counter++ ){//Parent
        outerDivContainer = document.createElement('div');
            for (let count = 0; count < num; count++) { //child 
            innerDivContainer = document.createElement('div');
            outerDivContainer.appendChild(innerDivContainer);
             innerDivContainer.classList.add('divSize');
            };
            document.body.appendChild(outerDivContainer);
            outerDivContainer.classList.add('divContainer');
        };//event listiner ends here
});
    };
 document.body.appendChild(selectTag);
 selectTag.classList.add('selectModification');








  
   





//clicking the start button will change the divboxes bgcolor when mouse hover over it. 
function startDrawing(){
    _divSubBoxes.forEach(element => {
        element.classList.add('coloredBackgroundDiv');});                        
};

//will reset everything back to default
function resetToDefault(){

};



  


function createHeaderPanel(){
   
    };