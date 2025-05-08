'use strict';
// ======== Task 1: Output of the following code =======
let user = 'Alice';

function outer() {
  function inner() {
    console.log(user);
  }
  let user = 'Bob';
  inner();
}

outer();

console.log('');

// ======== Task 3: Nested Function =======
function outerFn() {
  const value = 'outer';
  (function () {
    console.log(value);
  })();
}
outerFn();
console.log('');

// ======== Task 4: Loop inside a function =======
// never have access
function justify() {
  // can access here if declare with var
  //can't access here if declare with let
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

justify();

console.log('');

// ======== Task 5:  =======
// function outerFn() {
//   const value = 'outer';
//   (function () {
//     console.log(value);
//   })();
// }
// outerFn();

// function outerFn() {
//   console.log(value); // reference error

//   function inner() {
//     const value = 'outer';
//     console.log(value);
//   }
//   inner();
// }
// outerFn();

function firstFn() {
  const variable = 'Hi';
  console.log(variable);
}

function secondFn() {
  // console.log(variable); // Reference Error
}

firstFn();
secondFn();

console.log('');
