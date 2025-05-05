'use strict';
// =========== Task 1: Convert Celsius to Fahrenheit ========
console.log('Task 1: Convert Celsius to Fahrenheit');
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(
  '32 degree celsius convert to fahrenheit:',
  celsiusToFahrenheit(32)
);

console.log('');

// =========== Task 2: Maximum of Two Numbers ========
console.log('Task 2: Maximum of Two Numbers');
const findMax = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(findMax(10, -1));
console.log('');

// =========== Task 3: String is a Palindrome ========
console.log('Task 3: String is a Palindrome');
function isPalindrome(str) {
  let reStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reStr += str[i];
  }
  str === reStr
    ? console.log(str + ' is a Palindrome string')
    : console.log(str + ' is not a Palindrome string');
}
isPalindrome('madam');
// isPalindrome('hello');
console.log('');

// =========== Task 4: Factorial of a Number =====
console.log('Task 4: Factorial of a Number');
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('6! is: ', factorial(6));
console.log('');

// =========== Task 5: Count Vowels in a String =====
console.log('Task 5: Count Vowels in a String');
function countVowels(str) {
  const modStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < modStr.length; i++) {
    if (
      modStr[i] === 'a' ||
      modStr[i] === 'e' ||
      modStr[i] === 'i' ||
      modStr[i] === 'o' ||
      modStr[i] === 'u'
    )
      count++;
  }
  console.log(str + ' -> have total Vowels is: ', count);
}
countVowels('Hello Tapascript');
console.log('');

// =========== Task 6: Capitalize the First Letter =====
console.log('Task 6: Capitalize the First Letter');
function capitalizeWords(sentence) {
  let modStr = sentence[0].toUpperCase();
  let specialIndex;
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      modStr += ' ' + sentence[i + 1].toUpperCase();
      specialIndex = i;
    } else if (i - 1 === specialIndex) continue;
    else modStr += sentence[i];
  }
  console.log(modStr);
}
capitalizeWords('hello tapascript, please do not stop this javascript series');
console.log('');

// =========== Task 7: IIFE =====
console.log('Task 7: IIFE');
(function (lan) {
  console.log('Hello, ' + lan);
})('Javascript');
console.log('');

// =========== Task 8: Callback Function =====
console.log('Task 8: Callback Function');
function greet(name, callback) {
  callback(name);
}
greet('Tapascript', function (n) {
  console.log('Hello ' + n);
});
console.log('');
