function computerPlay() {
  play = Math.ceil(Math.random() * 3);
  switch (play) {
    case 1:
      return 'rock'
      break;
    case 2:
      return 'paper'
      break;
    case 3:
      return 'scissors'
      break;
  }
}

function playRound(playerPick) {
  computerPick = computerPlay();
  if (playerPick == computerPick) {
    console.log( `It's a tie! Computer also choose ${computerPick}.`)
  } else {
    switch (playerPick) {
      case 'rock':
        console.log( (computerPick == 'scissors') ? win(playerPick, computerPick) : lose(playerPick, computerPick));
        break;
      case 'paper':
        console.log( (computerPick == 'rock') ? win(playerPick, computerPick) : lose(playerPick, computerPick));
        break;
      case 'scissors':
        console.log( (computerPick == 'paper') ? win(playerPick, computerPick) : lose(playerPick, computerPick));
        break;
      default:
        console.log( 'Invalid Pick.')
        break;
    }
  }
}

function win(playerPick, computerPick) {
  playerScore += 1;
  return `You Win!! ${playerPick} beats ${computerPick}.`;
}

function lose(playerPick, computerPick) {
  computerScore += 1;
  return `You lose. ${computerPick} beats ${playerPick}.`;
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`=== Round ${i} ===`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore} `);
    console.log(playRound(prompt('rock, paper or scissors?'), computerPlay()));
  }
    console.log('The game is over and results are in...');
  if (playerScore == computerScore) {
    return 'It\'s a TIE.';
  } else if (playerScore < computerScore) {
    return 'Computer wins.';
  } else if (playerScore > computerScore) {
    return 'You WIN.'
  }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => { playRound('rock') });
paper.addEventListener('click', () => { playRound('paper') });
scissors.addEventListener('click', () => { playRound('scissors') });
  