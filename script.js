'use strict';
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
let check = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
      displayMessage('⛔ No Number!');
    }

    // Guess Number b/w 1 & 20
    if(guess < 1 || guess > 20){
      alert('Please Enter the number between 1 & 20!');
      console.log('Please Enter the number between 1 & 20!')
    }

    // When guess is correct
    else if (guess === number) {
      document.querySelector('.number').textContent = number;
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // When guess is incorrect and high number
    else if (guess !== number) {
      if (score > 1) {
        document.querySelector('.message').textContent = guess > number ? '📈 Too High' : '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.number').style.width = '15rem';
      }else{
        displayMessage('💥 You Lost the Game!');
        document.querySelector('body').style.backgroundColor = '#FF0000';
      }
    }

    // When guess is incorrect and low number
    // else if (guess < number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('body').style.backgroundColor = '#222';
    //   document.querySelector('.number').textContent = '?';
    //   document.querySelector('.number').style.width = '15rem';
    //   }else{
    //     document.querySelector('.message').textContent = '💥 You Lost the Game!';
    //     document.querySelector('body').style.backgroundColor = '#FF0000';
    //   }
    // }
  });

  /// Reset all functionality with again button

  const againBtn = document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
  })