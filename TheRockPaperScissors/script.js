const RANDOMTEN=()=>{
             let randomNumber = ( Math.floor(Math.random()*10)+1);
            return randomNumber;
};
let randomNumber = RANDOMTEN();
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

const playersChoice=()=>{
            let _usersInput = prompt(' Let\'s  play Rock-Paper-Scissors. What\'s your pick?');
            let _playersPick = _usersInput.toLowerCase() === 'rock' ? 'rock' : _usersInput.toLowerCase() === 'paper' ? 'paper' : 'scissors'; 
            return _playersPick;
}

function JunkenpoyGame(rounds){
let count =1;
while (count<rounds){
            let player = playersChoice();
            let coms = computersChoice();
            let result =  coms =='rock'? player =='paper'? "(Com)Rock vs (Player)Paper. Player Wins!": 
                                                                player=='scissors'? "(Com)Rock vs (Player)Scissors. Computer Wins!": " It's a DRAW!  " : 
                                    coms=='paper'? player =='rock'? "(Com)Paper vs (Player)Rock. Computer Wins!": 
                                                                    player=='scissors'? "(Com)Paper vs (Player)Scissors. Player Wins!": " It's a DRAW!  " :  
                                    coms=='scissors'? player =='rock'? "(Com)Scissors vs (Player)Rock. Player Wins!": 
                                                                    player=='paper'? "(Com)Scissors vs (Player)Paper. Computer Wins!": " It's a DRAW!  " : "       ";    
            alert(result);
            count++;
            };
};

alert(JunkenpoyGame(12));
//module.exports = computersChoice;