'use strict';
// ====== Task 1: determine output========
console.log('Task 1: determine output');
console.log(
  `The output of the above code is: "It's a normal day" cause switch statement is case sensitive. The value and case value are not same. That's why it execute default case.`
);
console.log('');

// ====== Task 2: ATM system ========
console.log('Task 2: ATM system');
const widthrawAmout = 310;
if (widthrawAmout % 100 === 0)
  console.log(`Withdrawal successful: ${widthrawAmout}`);
else console.log(`Invalid amount: ${widthrawAmout}`);
console.log('');

// ====== Task 3: Calculator with switch-case  ========
console.log('Task 3: Calculator with switch-case');
const operation = '/';
const num1 = 10,
  num2 = 20;

switch (operation) {
  case '+':
    console.log(`The numbers are: ${num1}, ${num2}`);
    console.log(`Their (${operation}) operation result is: ${num1 + num2}`);
    break;
  case '-':
    console.log(`The numbers are: ${num1}, ${num2}`);
    console.log(`Their (${operation}) operation result is: ${num1 - num2}`);
    break;
  case '*':
    console.log(`The numbers are: ${num1}, ${num2}`);
    console.log(`Their (${operation}) operation result is: ${num1 * num2}`);
    break;
  case '/':
    console.log(`The numbers are: ${num1}, ${num2}`);
    console.log(`Their (${operation}) operation result is: ${num1 / num2}`);
    break;
  case '%':
    console.log(`The numbers are: ${num1}, ${num2}`);
    console.log(`Their (${operation}) operation result is: ${num1 % num2}`);
    break;
  default:
    console.log('Unknown Operation');
}

console.log('');

// ====== Task 4: movie ticket  ========
console.log('Task 4: movie ticket');
const age = 65;
let ticketPrice = 0;
if (age < 18) {
  ticketPrice += 3;
  console.log(`Age: ${age}, Ticket price: $${ticketPrice}`);
} else if (age >= 18 && age <= 60) {
  ticketPrice += 10;
  console.log(`Age: ${age}, Ticket price: $${ticketPrice}`);
} else {
  ticketPrice += 8;
  console.log(`Age: ${age}, Ticket price: $${ticketPrice}`);
}

console.log('');

// ====== Task 5: Horoscope Sign Checker ========
console.log('Task 5: Horoscope Sign Checker');
const birthMonth = 'January';
switch (birthMonth.toLowerCase()) {
  case 'january':
  case 'february':
    console.log(`Birth Month: ${birthMonth}, Sign: Aries`);
    break;
  case 'march':
  case 'april':
    console.log(`Birth Month: ${birthMonth}, Sign: Tauru`);
    break;
  case 'may':
  case 'june':
    console.log(`Birth Month: ${birthMonth}, Sign: Gemin`);
    break;
  case 'july':
  case 'august':
    console.log(`Birth Month: ${birthMonth}, Sign: Aries`);
    break;
  case 'september':
  case 'october':
    console.log(`Birth Month: ${birthMonth}, Sign: Tauru`);
    break;
  case 'november':
  case 'december':
    console.log(`Birth Month: ${birthMonth}, Sign: Gemin`);
    break;
}
console.log('');

// ====== Task 6: determine triangle ========
console.log('Task 6: determine triangle');
const side1 = 5,
  side2 = 50,
  side3 = 5;

console.log(side1, side2, side3);

if (side1 === side2 && side1 === side3) console.log('Equilateral Triangle');
else if (side1 === side2 || side1 === side3) console.log('Isosceles Triangle');
else console.log('Scalene Triangle');
console.log('');
