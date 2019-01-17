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
      return 'scissor'
      break;
  }
}