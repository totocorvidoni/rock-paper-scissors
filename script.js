/* === Set Up === */

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const picks = document.querySelectorAll('.pick');
const roundResult = document.querySelector('#results');
const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
const gameOver = document.querySelector('#game-over')

rock.addEventListener('click', () => { playRound('rock') });
paper.addEventListener('click', () => { playRound('paper') });
scissors.addEventListener('click', () => { playRound('scissors') });

resetGame();

/* === Game Logic === */

function playRound(playerPick) {
  computerPick = computerPlay();
  gameRound += 1;
  roundResult.classList.remove('hidden');
  roundResult.textContent = getResult(playerPick, computerPick);
  setScore();  
  if (playerScore >= 5 || computerScore >= 5) endGame();
}

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

function getResult(playerPick, computerPick) {
  if (playerPick == computerPick) {
    return `It's a tie! Computer also choose ${computerPick}.`
  } else {
    switch (playerPick) {
      case 'rock':
        return (computerPick == 'scissors') ? win(playerPick, computerPick) : lose(playerPick, computerPick);
        break;
      case 'paper':
        return (computerPick == 'rock') ? win(playerPick, computerPick) : lose(playerPick, computerPick);
        break;
      case 'scissors':
        return (computerPick == 'paper') ? win(playerPick, computerPick) : lose(playerPick, computerPick);
        break;
      default:
        return 'Invalid Pick.'
        break;
    }
  }
}

function win(playerPick, computerPick) {
  playerScore += 1;
  if (playerScore)
  return `You Win!! ${playerPick} beats ${computerPick}.`;
}

function lose(playerPick, computerPick) {
  computerScore += 1;
  return `You lose. ${computerPick} beats ${playerPick}.`;
}

function endGame() {
  gameOver.classList.toggle('hidden');
  endText = document.createElement('p');
  endText.classList.add('toRemove', 'end-text');
  if (playerScore >= 5) {
    endText.textContent = 'Congratulations, you have won the game.'
  } else {
    endText.textContent = 'The computer has won the game.'
  }
  gameOver.appendChild(endText);
  disablePicks();
  addResetButton();  
}

/* === Helpers === */

function setScore() {
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
}

function resetGame() {
  enablePicks();
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  setScore();
  cleanContent();
}

function disablePicks() {
  picks.forEach(pick => pick.setAttribute('disabled', true));
}

function enablePicks() {
  picks.forEach(pick => pick.removeAttribute('disabled')); 
}

function addResetButton() {
  reset = document.createElement('button');
  reset.textContent = 'Restart';
  reset.classList.add('toRemove');
  gameOver.appendChild(reset);
  reset.addEventListener('click', resetGame);
}

function cleanContent() {
  roundResult.textContent = '';
  gameOver.classList.toggle('hidden');
  roundResult.classList.toggle('hidden');
  elements = document.querySelectorAll('.toRemove', 'reset')
  elements.forEach( element => element.remove())
}
