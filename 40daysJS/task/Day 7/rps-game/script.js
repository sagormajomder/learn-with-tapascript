'use strict';
/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

const randGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function RockPaperScissorGame() {
  console.log('Welcome to the game. Hope you will enjoy the game');

  const userProptChoice = prompt(
    'Please write Rock 🪨, Paper 🧻, or Scissor ✂️'
  );

  // Check if user input is correct or not
  const userChoice = userProptChoice ? userProptChoice.toLowerCase() : 'cancel';

  // If user input wrong, game start again
  if (
    userChoice === 'cancel' ||
    (userChoice !== 'rock' &&
      userChoice !== 'paper' &&
      userChoice !== 'scissor')
  ) {
    console.log('Use input is unkhown. Game is start again!!');
    RockPaperScissorGame();
    return;
  }

  // computer choice implemented
  const comRanChoice = randGenerator(1, 3);

  let comChoice = '';

  switch (comRanChoice) {
    case 1:
      comChoice = 'rock';
      break;
    case 2:
      comChoice = 'paper';
      break;
    case 3:
      comChoice = 'scissor';
      break;
    default:
      console.log('Unknown case');
  }

  console.log('User Choice: ', userChoice);
  console.log('Computer Choice: ', comChoice);

  // compare computer and user choice and annouch winner
  if (
    (userChoice === 'rock' && comChoice === 'scissor') ||
    (userChoice === 'paper' && comChoice === 'rock') ||
    (userChoice === 'scissor' && comChoice === 'paper')
  )
    console.log('Yah! User win!!!');
  else if (userChoice === comChoice) console.log('The game is a tie');
  else if (
    (userChoice === 'rock' && comChoice === 'paper') ||
    (userChoice === 'paper' && comChoice === 'scissor') ||
    (userChoice === 'scissor' && comChoice === 'rock')
  )
    console.log('Oh! Computer win!!!');
  else {
    console.log("Please check the input, We didn't understand it.");
  }

  // check if user want to play again
  const playAgainPrompt = prompt('Do you want to play again (yes/no)');
  const playAgainChoice = playAgainPrompt
    ? playAgainPrompt.toLowerCase()
    : 'no';

  if (playAgainChoice === 'yes') {
    RockPaperScissorGame();
  } else {
    console.log('Thanks for Playing! See you Next Time');
  }
}
RockPaperScissorGame();
