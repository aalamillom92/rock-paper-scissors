//Gives a random number between 1 and 3 being 1=rock, 2=paper, 3=scissor
let computerCounter = 0;
let playerCounter = 0;

function computerChoice() {
    const min=1;
    const max=3;
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function playerChoice() {
    let player_option = prompt('Ingrese su eleccion (piedra, papel o tijera)');

    if (player_option.toLowerCase() === 'piedra') {
        return 1;
    } else if (player_option.toLowerCase() === 'papel') {
        return 2;
    } else if ( player_option.toLowerCase() === 'tijera') {
        return 3;
    } else {
        return 0;
    }
}

function playRound(playerChoice=0, computerChoice=0){

    if (playerChoice === computerChoice) {
        return playerCounter++, computerCounter++;
    } else if(playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 3 || playerChoice === 3 && computerChoice === 1) {
       return computerCounter++;
    } else if(playerChoice === 1 && computerChoice === 3 || playerChoice === 2 && computerChoice === 1 || playerChoice === 3 && computerChoice === 2) {
        return playerCounter++;
    } else if (playerChoice === 0) {
        return document.write('error');
    }

}

function game(){


    for (let i = 0; i < 5; i++) {
        let computerrps = computerChoice();
        let playerrps = playerChoice();
        playRound(playerrps, computerrps);
     }

     if (computerCounter > playerCounter) {
         document.write('Gana la computadora');
     } else if (playerCounter > computerCounter){
         document.write ('Ganaste')
     } else if (computerCounter === playerCounter) {
         document.write('Empate')
     }

}

