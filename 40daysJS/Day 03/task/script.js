'use strict';
//=========TASK 1: ODD or EVEN =============
console.log('TASK 1: ODD or EVEN');
const tempNum = -1;
tempNum % 2 == 0
  ? console.log(`(${tempNum}) is even`)
  : console.log(`(${tempNum}) is odd`);
console.log('');
//=========TASK 2: Driving License =============
console.log('TASK 2: Driving License');
const age = 17;
age >= 18
  ? console.log('you are eligible to get a driving license')
  : console.log('you are ineligible to get a driving license');

console.log('');

//=========TASK 3: Calculate CTC with a Bonus =============
console.log('TASK 3: Calculate CTC with a Bonus');
const salary = 12300;
const anualSalary = salary * 12;
const bonus = anualSalary * 0.2;
console.log(`I make per annum as a CTC: $${anualSalary + bonus}`);

console.log('');

//=========TASK 4: Traffic Light Simulation =============
console.log('TASK 4: Traffic Light Simulation');
const color = 'Green';
color.toLowerCase() === 'green' ? console.log('GO') : console.log('STOP');

console.log('');

//=========TASK 5: Electricity Bill Calculator =============
console.log('TASK 5: Electricity Bill Calculator');
const unitsPerDay = 5;
const costPerUnit = 150;
const daysInMonth = 30;
const monthlyBill = unitsPerDay * daysInMonth * costPerUnit;
console.log(`charged per month: ${monthlyBill}`);

const annualBillWithoutDiscount = monthlyBill * 12;
const discount = annualBillWithoutDiscount * 0.2;
const annualBillWithDiscount = annualBillWithoutDiscount - discount;
console.log(`Annual payment with 20% discount: ${annualBillWithDiscount}`);

console.log('');

//=========TASK 6: Leap Year Checker =============
console.log('TASK 6: Leap Year Checker ');
const year = 2028;
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log(`${year} is Leap Year`)
  : console.log(`${year} is not Leap Year`);

console.log('');

//=========TASK 7: Max of Three Numbers =============
console.log('TASK 7: Max of Three Numbers');
const p = 2,
  q = 10,
  r = 7;

p > q && p > r
  ? console.log(`Max: ${p}`)
  : q > p && q > r
  ? console.log(`Max: ${q}`)
  : console.log(`Max: ${r}`);

console.log('');

//=========TASK 8: Bitwise Doubling =============
console.log('TASK 8: Bitwise Doubling');
const count = 5; // 101 << 1 = 1010
console.log(`Make ${count} double : ${count << 1}`); // 10

console.log('');
