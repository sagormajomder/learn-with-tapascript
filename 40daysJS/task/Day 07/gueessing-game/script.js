'use strict';
/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

/**
 * Assumtions
 *
 * 1) Generate a random secret number between 1 and 10 and tell user to guess that number
 *
 * 2) create propmt to get user input and convert it into number type
 *
 * 3) If user input is higher than the secret number, print 'too high' or lower than the secret number, print 'too low' and again ask for user input
 *
 * 4) if user guessing number is the secret number, congrats user and print how many attemps done to guess correct
 *
 * 5) ask user to play again or not
 */

const MAX_NUMBER = 10;
const MIN_NUMBER = 1;

const randGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function guessingGame() {
  console.log('Welcome to the game. Hope you will enjoy the game');
  console.log('Try to guess a number between 1 and 10');

  // Generate secret number
  const comGenerateNumber = randGenerator(MAX_NUMBER, MIN_NUMBER);

  let userChoice = null;
  let count = 0;

  do {
    const userPropmtChoice = Number(
      prompt('Please enter your guess between 1 and 10')
    );

    userChoice = userPropmtChoice ? userPropmtChoice : null;
    if (
      isNaN(userChoice) ||
      userChoice < MIN_NUMBER ||
      userChoice > MAX_NUMBER
    ) {
      console.log(
        `Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`
      );
      continue;
    }

    console.log('User Guess: ', userChoice);

    if (userChoice === comGenerateNumber) {
      console.log(
        'Congrats! You guess is correct ❤️ and your guess is right in ' +
          (count + 1) +
          ' attemps'
      );
    } else if (userChoice > comGenerateNumber) {
      count++;
      console.log('Too High! Try again.');
    } else if (userChoice < comGenerateNumber) {
      count++;
      console.log('Too Low! Try again.');
    } else {
      console.log('Unkhown error happen. Please start the game again');
    }
  } while (userChoice !== comGenerateNumber);

  // check if user want to play again
  const playAgainPrompt = prompt('Do you want to play again (yes/no)');
  const playAgainChoice = playAgainPrompt
    ? playAgainPrompt.toLowerCase()
    : 'no';

  if (playAgainChoice === 'yes') {
    guessingGame();
  } else {
    console.log('Thanks for Playing! See you Next Time');
  }
}
guessingGame();
