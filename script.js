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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return `It's a tie! Computer also choose ${computerSelection}.`
  } else {
    switch (playerSelection) {
      case 'rock':
        return (computerSelection == 'scissors') ? win(playerSelection, computerSelection) : lose(playerSelection, computerSelection);
        break;
      case 'paper':
        return (computerSelection == 'rock') ? win(playerSelection, computerSelection) : lose(playerSelection, computerSelection);
        break;
      case 'scissors':
        return (computerSelection == 'paper') ? win(playerSelection, computerSelection) : lose(playerSelection, computerSelection);
        break;
      default:
        return 'Invalid Selection.'
        break;
    }
  }
}

function win(playerSelection, computerSelection) {
  playerScore += 1;
  return `You Win!! ${playerSelection} beats ${computerSelection}.`;
}

function lose(playerSelection, computerSelection) {
  computerScore += 1;
  return `You lose. ${computerSelection} beats ${playerSelection}.`;
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