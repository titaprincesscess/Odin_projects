const BUTTONS = document.querySelectorAll('button');
const SHOWRESULT = document.querySelector('.showResult');
const SHOWSCORE = document.querySelector('.showScore');
const COMPUTERSCORE = document.querySelector('.computersScore');
const PLAYERSCORE= document.querySelector('.playersScore');
const CLICKS = document.querySelector('.clicks');

function computersChoice(){
            let _comsPick = "";
            let randomNumber = ( Math.floor(Math.random()*10)+1);
            if(randomNumber>=8){
                _comsPick = "rock";
            } else if(randomNumber>=4){
                _comsPick = "paper";
            }else{
                _comsPick = "scissors";
            }
              return _comsPick;
};
function JunkenpoyGame(coms,player){
            let result =  coms =='rock'? player =='paper'? "PLAYER Wins!": 
                                                                player=='scissors'? "COMPUTER Wins!": "It's a DRAW!" : 
                                    coms=='paper'? player =='rock'? "COMPUTER Wins!": 
                                                                    player=='scissors'? "PLAYER Wins!": "It's a DRAW!" :  
                                    coms=='scissors'? player =='rock'? "PLAYER Wins!": 
                                                                    player=='paper'? "COMPUTER Wins!": "It's a DRAW!" : "       "; 
                                return result;
};
let newGame;
let clicks = 1;
let computersScore = 0;
let playersScore = 0;
BUTTONS.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let buttonID = button.id;
        let computer = computersChoice();
        let junkenpoy = JunkenpoyGame(computer,buttonID);
        if(clicks <= 5){
        SHOWRESULT.textContent = 'PLAYERS\'s:  '+buttonID.toUpperCase()+'  vs  COMPUTER\'s:  '+computer.toUpperCase();
        SHOWSCORE.textContent =  junkenpoy ;
        CLICKS.textContent = "Clicks: "+clicks;
        if(junkenpoy =='PLAYER Wins!'){
            playersScore++;
            PLAYERSCORE.textContent = 'Player: '+playersScore;
        }else if(junkenpoy=='COMPUTER Wins!'){
            computersScore++;
            COMPUTERSCORE.textContent = 'Computer: '+computersScore;}
        ++clicks;
        }else if(clicks>5){
            const SCOREBOARD = document.querySelectorAll('.whiteBoard p');
            SCOREBOARD.forEach(paragraph =>{
                paragraph.textContent = '';
            });
            BUTTONS.forEach(button =>{
                button.disabled =true;
            });
            newGame=document.createElement('button');
            newGame.textContent ='START NEW GAME';
            document.body.appendChild(newGame);

            newGame.addEventListener('click', ()=>{
                    clicks=1;
                    computersScore = 0;
                    playersScore =0;
                    newGame.remove();
                    BUTTONS.forEach(button =>{
                        button.disabled =false;
                    });
            });
        }
     
    });
});
//module.exports = computersChoice;