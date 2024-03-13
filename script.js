'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let currentScore = 20;
let highScoreAfterGame = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (currentScore > 1) {
    // When there is no input
    if (!guess) {
      displayMessage('No Number! ⛔');

      //   When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');

      //   highscore logic
      if (currentScore > highScoreAfterGame) {
        highScoreAfterGame = currentScore;
        document.querySelector('.highscore').textContent = highScoreAfterGame;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      //   When guess is too high
    } else if (guess > secretNumber) {
      displayMessage('📈 Too High!');
      currentScore--;
      displayScore(currentScore);

      //   When guess is too low
    } else if (guess < secretNumber) {
      displayMessage('📉 Too Low!');
      currentScore--;
      displayScore(currentScore);
    }
  } else {
    currentScore--;
    displayMessage('💥 You lost the game!');
  }
});

// restoring to inital conditons when the button "again" is clicked
document.querySelector('.again').addEventListener('click', function () {
  restGame();
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(currentScore) {
  document.querySelector('.score').textContent = currentScore;
}

function restGame() {
  currentScore = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  displayScore(currentScore);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
