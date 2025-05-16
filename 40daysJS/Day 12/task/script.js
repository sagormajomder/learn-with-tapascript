'use strict';

const user = { name: 'Alex', age: undefined };
console.log(user.age ?? 'Not provided');

// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);

const bookStore = {
  books: [
    'Introduction to Algorithms',
    'The Art of Computer Programming',
    'Modern Operating',
    "Alice's Adventures in Wonderland",
    'The Hobbit',
    "Harry Potter and the Sorcerer's Stone",
  ],
  isAvailable: 1,
  checkAllBook() {
    console.log(this.books);
  },
  reStock(bookName) {
    this.books.push(bookName);
  },
  checkAvailable(bookName) {
    for (let book = 0; book < this.books.length; book++) {
      if (this.books[book].toLowerCase() === bookName.toLowerCase()) {
        console.log(bookName + ' is available in the store');
        this.isAvailable--;
        break;
      }
    }
    if (this.isAvailable) {
      console.log(bookName + ' is not available in the store');
    }
    this.isAvailable++;
  },
};
bookStore.checkAllBook();
bookStore.checkAvailable('The Hobbit');

const obtainGrades = {
  english: 5,
  bangla: 4,
  math: 5,
  highermath: 5,
  physics: 4,
  chemistry: 4,
  biology: 5,
  sociology: 3,
};
console.log(Object.keys(obtainGrades));
console.log(Object.entries(obtainGrades));

console.log(Object.hasOwn(obtainGrades, 'english'));

const person = { name: 'John' };
const newPerson = person;
newPerson.name = 'Doe';
console.log(person.name);

const student = {
  name: 'John',
  age: 26,
  obtainGrades: {
    english: 5,
    bangla: 4,
    math: 5,
    highermath: 5,
    physics: 4,
    chemistry: 4,
    biology: 5,
    sociology: 3,
  },
};

const newStudent = structuredClone(student);
newStudent.obtainGrades.english = 2;
console.log(newStudent.obtainGrades.english); // 2
console.log(student.obtainGrades.english); // 5

const users = [
  {
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43,
  },
  {
    name: 'Bob',
    address: 'Canada',
    age: 53,
  },
  {
    name: 'Carl',
    address: 'Bangalore',
    age: 26,
  },
];

for (const obj of users) {
  const { name, address, age } = obj;
  console.log(name, address, age);
}
