'use strict';
//======== Task 1: Pyramid Pattern =========
console.log('Task 1: Pyramid Pattern');
let star = '';
for (let row = 0; row < 5; row++) {
  for (let col = 0; col <= row; col++) {
    star += '* ';
  }
  console.log(star);
  star = '';
}
console.log('');

//======== Task 2: Multiplication Table =========
console.log('Task 2: Multiplication Table');
const numTime = 7;
for (let num = 1; num <= 10; num++) {
  console.log(`${numTime} x ${num} = ${numTime * num}`);
}
console.log('');

//======== Task 3: odd number summation =========
console.log('Task 3: odd number summation');
let oddSum = 0;
for (let num = 1; num <= 500; num++) {
  if (num % 2 !== 0) oddSum += num;
}
console.log('summation of odd numbers:', oddSum);
console.log('');

//======== Task 4: Skipping Multiples of 3 =========
console.log('Task 4: Skipping Multiples of 3');
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
console.log('');

//======== Task 5: Reverse Digits of a Number =========
console.log('Task 5: Reverse Digits of a Number');
let num = 6789;
console.log('Input:', num);
let reDigit = 0;
while (num !== 0) {
  reDigit = reDigit * 10 + Number.parseInt(num % 10);
  num = Number.parseInt(num / 10);
}
console.log('Output:', reDigit);
console.log('');
