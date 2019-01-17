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
  return `You Win!! ${playerSelection} beats ${computerSelection}.`
}

function lose(playerSelection, computerSelection) {
  return `You lose. ${playerSelection} loses against ${computerSelection}.`
}

const playerSelection = 'rock';
const computerSelection = computerPlay();