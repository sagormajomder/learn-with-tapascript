'use strict';
if (true) {
  // TDZ started for all declared variables (without var declared) in this block
  //
  //
  // console.log('Hello', fullName); // Reference Error
  //
  //
  const fullName = 'Sagor Majomder'; // TDZ ended for "fullName"
  console.log('Hello', fullName);

  //
  //
  // console.log('Now I am learning', course); // Reference Error
  //
  //
  let course; // TDZ ended for course;
  //
  //
  const teacher = 'Tapas'; // TDZ ended for teacher;
  console.log('Thank you so much ' + teacher + ' dada');
  //
  //
  course = '40 days of JS';
  console.log('Now I am learning', course);
  //
  //
}

console.log('I am ', fullName); // hoisting and undefined

const isLearning = true;

const isLazy = true;

const willBeFailer = function () {
  console.log(
    "You will be failer. So don't get lazy, wake up and practice untill you success"
  );
};

if (isLearning) beExpert(); // hoisting and executed
if (isLazy) willBeFailer();

var fullName = 'Sagor Majomder';
function beExpert() {
  console.log('I will learn and practice untill I success');
}

// hoisting but Reference Error
// const willBeFailer = function () {
//   console.log(
//     "You will be failer. So don't get lazy, wake up and practice untill you success"
//   );
// };
