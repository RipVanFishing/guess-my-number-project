'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScores = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const onClickCheckBtn = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // No input
  if (!guess) {
    displayMessage('Wrong Number...');
  }
  //   When player won
  else if (guess === secretNumber) {
    const guessNumber = Number(document.querySelector('.score').textContent);
    displayMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScores) {
      highScores = score;
      document.querySelector('.highscore').textContent = highScores;
    }
  }
  //   When number too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');

      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.guess').value = '';
};

const onClickAgainBtn = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', onClickCheckBtn);

document.querySelector('.again').addEventListener('click', onClickAgainBtn);
