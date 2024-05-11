
console.log ("Hello Everyone")

// computer Choice


function getComputerChoice(){
    let choice = Math.random();

    if( choice <=0.3){
        return ('r')
    }
    else if (choice<=0.6){
        return('p')
    }
    else{
        return('s')
    }
};
console.log(getComputerChoice());


//Human Choice

let dat=prompt(" Please choose rock, paper or scissor");
let enter= dat.toLocaleLowerCase();
console.log(enter);

function getHumanChoice(){
    
    if(enter =='rock'){
        return ('r')
    }
    else if (enter=='paper'){
        return('p')
    }
    else if (enter=='scissor'){
        return('s')
    }
    else{
        return( 'Invalid Choice');
    }
}
console.log(getHumanChoice(enter));


//Play Round


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'r' && computerChoice == 'p') {
            return 'You Lost';
        } else if (humanChoice == 'r' && computerChoice == 's') {
            return 'You Won';
        } else if (humanChoice == 'p' && computerChoice == 's') {
            return 'You Lost';
        } else if (humanChoice == 'p' && computerChoice == 'r') {
            return 'You Won';
        } else if (humanChoice == 's' && computerChoice == 'r') {
            return 'You Lost';
        } else if (humanChoice == 's' && computerChoice == 'p') {
            return 'You Won';
        }
        else if(humanChoice==computerChoice){
            return 'Draw';
        } else {
            return 'Sommething went wrong';
        }
    }
console.log(playRound(humanSelection, computerSelection));
alert(playRound(humanSelection, computerSelection));


// Scoring game

let gameResult = playRound(humanSelection, computerSelection);
let humanScore=0;
let computerScore=0;


if (gameResult=='You Won'){
    localStorage.setItem()
}