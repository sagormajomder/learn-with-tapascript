// =========== Task 1 ==================
const fullName = 'Sagor Majomder';
let age = 26;
let isStudent = true;
const favLanaguage = 'Js';

// =========== Task 2 ==================
console.log(fullName, age, isStudent, favLanaguage);

// =========== Task 3 ==================
// fullName = 'Sajal Majomder';
// age = 25;

// =========== Task 4 ==================
const learner = {
  fullName,
  age,
  isStudent,
  favLanaguage,
};

console.log(learner);
learner.age = 25;
console.log(learner);

const learner2 = [fullName, age, isStudent, favLanaguage];
console.log(learner2);
// learner2 = ['JS', 'CPP']; // Error -> const variable reassign
learner2.push('JS', 'CPP');
console.log(learner2);
